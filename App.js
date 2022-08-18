import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Components/Home'
import Details from './Components/Details'
import DetailsVideos from './Components/DetailsVideos'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="DetailsVideos" component={DetailsVideos} />
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})