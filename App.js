import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Components/Header';
import Trends from './Components/Trends';
import Content from './Components/Content';
import Bleu from './Exercices/Bleu';
import Rouge from './Exercices/Rouge';

const App = () => {
  return (

    <View style={styles.content} >
      <Header/>
      <Trends/>
      <Content/>
      {/* <Text style={styles.txt}>Yannis</Text>
      <Bleu/>
      <Rouge/> */}


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