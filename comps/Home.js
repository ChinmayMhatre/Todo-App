import React from 'react'
import { Text, StyleSheet,View, ScrollView } from 'react-native'
import {Fab} from  'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import Todo from './Todo'
const colors = [
    "#ffb3ba",
    "#ffdfba",
    "#ffffba",
    "#baffc9",
    "#bae1ff"
]

const Home = ({navigation}) => {
    return(
       <View style = {styles.container}>
            <ScrollView style={styles.todos}>
                <Text style={styles.heading} >Here Are Your Tasks</Text>
                <Todo cardColor = "#baffc9" />
                <Todo cardColor = "#ffb3ba" />
                <Todo cardColor = "#ffffba" />
                <Todo cardColor = "#bae1ff" />
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
    )
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
    }
})

export default Home