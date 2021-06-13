import React,{useState,useEffect} from 'react';
import { Text, StyleSheet,View, ScrollView, StatusBar } from 'react-native';
import {Fab} from  'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Todo from './Todo';
import {useIsFocused} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home = ({navigation}) => {
    const colors = [
        "#ffb3ba",
        "#ffdfba",
        "#ffffba",
        "#baffc9",
        "#bae1ff",
        "#c9c9ff",
        "#ffffff",
        "#ffbdbd"
    ]
    const [isloading, setIsloading] = useState(false)
    const [list, setList] = useState([])
    const isFocused = useIsFocused();

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@todo_list')
          console.log(jsonValue)
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          console.log("something went wrong");
        }
      }

    const getitems = async () => {
        setIsloading(true)
        const data = await AsyncStorage.getItem('@todo_list')
        if(!data){
            setList([])
        }else{
            setList(JSON.parse(data))
        }
        // setTimeout(() => {
            setIsloading(false) 
        // }, 1000); 

    }  

    const deleteItem = async (id)=>{
        const newList = await list.filter( item => item.id != id)
        await AsyncStorage.setItem('@todo_list',JSON.stringify(newList));
        setList(newList)
        console.log(newList)
    }




    const checkHandler = async (id)=>{
        const newArr = list.map((item)=>{
            if(item.id == id){
                item.isChecked = !item.isChecked
            }
            return item
        })
        await AsyncStorage.setItem("@todo_list",JSON.stringify(newArr))
        setList(newArr)
    }

    useEffect(()=>{
        getitems()
    },[isFocused])

    if(isloading){
        return(
            <View style={styles.loadingContainer} >
                <Text style={styles.loadingtext}>
                    loading ...
                </Text>
                <LottieView source={require('../assets/todo.json')} autoPlay loop />
            </View>
        )
    }
    else{
        {console.log(list)}
        return(
            <>
            <StatusBar
            backgroundColor="#141E30"
            />
           <View style = {styles.container}>
                <ScrollView style={styles.todos}>
                    
                    <Text style={styles.heading} >Here Are Your Tasks</Text>
                    {
                        list.map((item)=>(
                            <Todo 
                            key={item.id} 
                            id= {item.id}
                            cardColor = {colors[Math.floor(Math.random()*colors.length)]} 
                            title = {item.title}  
                            time = {item.timestamp}  
                            isChecked={item.isChecked}
                            checkHandler={checkHandler}
                            deleteItem = {deleteItem}
                            item={item}
                            navigation={navigation}
                            /> 
                        ))
                    }
                </ScrollView>
                <Fab
                delayPressIn={150}
                style={{
                    backgroundColor:"#f4c7ab",
                }}
                onPress={()=>navigation.navigate("New")}
                >
                    <Icon name={"plus"} />
                </Fab>
           </View> 
           </>
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#141E30"
    },
    heading:{
        color:"#fff",
        textAlign:"center",
        fontSize:30,
        paddingTop:20,
        paddingBottom:30
    },
    todos:{
        paddingHorizontal:25,
        paddingBottom:40
    },
    loadingContainer:{
        flex:1,
        backgroundColor:"#141E30"
    },
    loadingtext:{
        textAlign:"center",
        color:"#fff",
        paddingTop:80,
        fontSize:40
    }
})

export default Home