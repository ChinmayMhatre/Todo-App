import React,{useState} from 'react'
import { Text,
         StyleSheet,
         View
} from 'react-native'

import {Form,
        Input,
        Item,
        Label,
        Button
} from 'native-base'

import AsyncStorage from '@react-native-async-storage/async-storage';

const New = ({navigation}) => {
    const [title,setTitle] = useState("")
    const [subtitle,setSubtitle] = useState("")
    const [error,setError]  = useState("")

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@todo', jsonValue)
        } catch (e) {
            console.log(e);
          setError("something went wrong")
        }
      }

    const handleSubmit = async ()=>{
        if(title.length > 10 || subtitle.length > 10 ){
            setError("length must be under 10 characters")
        }else if(title.length == 0 || subtitle.length == 0){
            setError("Inputs cannot be empty")
        }else{
            const item = {
                title:title,
                subtitle:subtitle,
                isChecked:false
            }
            storeData(item)
            navigation.navigate("Home")
        }
       

    }

    return(
       <View style={styles.container} >
            <View style={styles.inputContainer} >
            <Text style={{paddingBottom:100,color:"#fff",fontSize:30}}>Add a new Item</Text>
                <Item style={styles.input} >
                    <Input placeholder="Title" style={{color:"#fff"}} onChangeText={(text)=>setTitle(text)} value={title} /> 
                </Item>            
                <Item style={styles.input} >
                    <Input placeholder="SubTitle" style={{color:"#fff"}} onChangeText={(text)=>setSubtitle(text)} value={subtitle} />
                </Item>
                {error?<Text style={styles.error}>{error}</Text>:(<></>)}

                <Button onPress={handleSubmit} style={styles.button} bordered >
                    <Text style={{color:"#fff"}}>Success</Text>
                </Button>
            </View>            
       </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#141E30"
    },
    button:{
        width:"80%",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        borderColor:"#3c8dad",
        marginTop:10
    },
    inputContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        width:"80%",
        marginBottom:30,
        borderColor:"#3c8dad"
    },
    error:{
        color:"#f54748",
        fontSize:15,
        paddingBottom:10
    }
})

export default New