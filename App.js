
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator();
import Home from './comps/Home.js'
import Edit from './comps/Edit.js'
import New from './comps/New.js'

const App = () => {
  return(
   
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home" 
      screenOptions = {{
        title:"Todo List",
        headerTitleAlign:"center",
        headerStyle:{
          backgroundColor : "#141E30",
        
        },
        headerTintColor:"#fff"
        }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="New" component={New} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
