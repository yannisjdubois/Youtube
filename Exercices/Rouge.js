import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rouge = () => {
  return (
    <View>
      <Text style={styles.carreRouge}>Rouge</Text>
    </View>
  )
}

export default Rouge

const styles = StyleSheet.create({

    carreRouge:{
        height: 100,
        width: 100,
        backgroundColor: "red"
    }
})