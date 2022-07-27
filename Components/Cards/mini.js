import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const mini = ({item}) => {
  return (
    <View style={styles.minicard}>
        <Text>{item.image}</Text>
        <Text>{item.titre}</Text>
    </View>
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