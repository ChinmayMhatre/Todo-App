import React from 'react'
import { 
    View,
    Text,
    StyleSheet
     } from 'react-native'

import {Button} from 'native-base'
import {CheckBox} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

const Todo = ({cardColor}) => {
    return (
        <View style={[styles.container,{backgroundColor:cardColor}]} >
            <View>
                <Text style={styles.title} >This is the task</Text>
                <Text style={styles.subTitle} >This is the subtitle</Text>
            </View>
            <View style = {styles.buttonContainer} >
            <CheckBox
             checked
            size = {40}
            style={styles.checkbox} />
                <Button style = {styles.actionButtons}  delayPressIn={150} >
                    <Icon name="edit" size={29} color={"#3b3b3b"} />
                </Button >
                <Button style = {styles.actionButtons} delayPressIn={150}>
                    <Icon name="trash" size={30} color={"#3b3b3b"} />
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        color:"black",
        height:90,
        marginTop:15,
        flexDirection:"row",
        borderRadius:5,
        elevation : 5,
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10
    },
    title:{
        fontSize:17,
        fontWeight:"bold"

    },
    subTitle:{
        fontSize:12,
        color:"#3b3b3b"
    },
    buttonContainer:{
        flexDirection:"row",
    },
    actionButtons:{
        marginHorizontal:5,
        backgroundColor:"rgba(0,0,0,0)",
        elevation:0,
    },
    checkbox:{
        alignSelf:"center",
        marginRight:20,
        width:25,
        height:23,
        color:"#3b3b3b",
        alignItems:"center",    
        justifyContent:"center",    
        backgroundColor:"#3b3b3b",
        borderColor:"#3b3b3b"
    }
})

export default Todo
