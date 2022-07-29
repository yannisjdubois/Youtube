import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header';
import Trends from './Trends';
import Content from './Content';
// import Bleu from './Exercices/Bleu';
// import Rouge from './Exercices/Rouge';


const Home = ({navigation}) => {
  return (

    <View style={styles.content} >
        {/* <Text style={styles.txt}>Yannis</Text>
        <Bleu/>
        <Rouge/> */}
        <Header navigation={navigation}/>
        <Trends/>
        <Content/>



    </View>
  )
}

export default Home

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