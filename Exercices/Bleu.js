import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bleu = () => {
  return (
    <View>
      <Text style={styles.carreBleu}>Bleu</Text>
    </View>
  )
}

export default Bleu

const styles = StyleSheet.create({

    carreBleu:{
        height: 100,
        width: 100,
        backgroundColor: "blue"
    }
})