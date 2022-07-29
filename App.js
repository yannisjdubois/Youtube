import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Components/Header';
import Trends from './Components/Trends';
import Content from './Components/Content';
import Bleu from './Exercices/Bleu';
import Rouge from './Exercices/Rouge';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import Details from './Components/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <View style={styles.content} >
        {/* <Text style={styles.txt}>Yannis</Text>
        <Bleu/>
        <Rouge/> */}
      <Header/>
      <Trends/>
      <Content/>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>

    </View>
  )
}

export default App

const styles = StyleSheet.create({

  // content:{
  //   flex:1,
  //   backgroundColor: "lightgrey",
  //   justifyContent:"center",
  //   alignItems:"center"
  // },

  // txt:{
  //   color: "white",
  //   fontSize: 18,
  //   fontWeight: "900",
  //   fontVariant: 
  // },


})