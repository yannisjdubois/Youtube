import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Image } from "@rneui/themed";

const mini = ({item}) => {
  return (
    // <View style={styles.minicard}>
    //     <Text>{item.image}</Text>
    //     <Text>{item.titre}</Text>
    // </View>

    <Card style={{position:"relative",alignItems:"center"}}>
      <Image
          style={{width:150,height:100}}
          resizeMode="contain"
          // source={require('')}
        />
      <Card.Divider/>
      <Card.Title>{item.titre}</Card.Title>
    </Card>
  )
}

export default mini

const styles = StyleSheet.create({
    minicard: {
        height: 100,
        width: 200,
        backgroundColor:"yellow",
        marginRight: 5
    }
})