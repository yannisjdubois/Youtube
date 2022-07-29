import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Image } from "@rneui/themed";

const maxi = ({item}) => {
  return (
    <View style={{position:"relative",alignItems:"center"}}>
      <Image
                            style={{width:350,height:100}}
                            resizeMode="cover"
                            source={item.image}
        />
      <Card.Divider/>
      <Card.Title>{item.titre}</Card.Title>
    </View>
  )
}

export default maxi

const styles = StyleSheet.create({})