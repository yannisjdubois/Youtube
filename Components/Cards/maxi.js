import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Image } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';


const maxi = ({item}) => {

  const navigation = useNavigation();

  return (
    <View style={{position:"relative",alignItems:"center"}}>

      <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details')}
      >
        <Image
          style={{width:350,height:100}}
          resizeMode="cover"
          source={item.image}
        />

      </TouchableOpacity>

      

      <Card.Divider/>
      <Card.Title>{item.titre}</Card.Title>


    </View>
  )
}

export default maxi

const styles = StyleSheet.create({})