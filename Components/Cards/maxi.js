import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Image } from "@rneui/themed";

const maxi = ({item}) => {
  return (
    <Card style={{position:"relative",alignItems:"center"}}>
      <Image
          style={{width:350,height:100}}
          resizeMode="contain"
          // source={require('')}
        />
      <Card.Divider/>
      <Card.Title>{item.titre}</Card.Title>
    </Card>
  )
}

export default maxi

const styles = StyleSheet.create({})