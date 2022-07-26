import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Icon } from "@rneui/themed";


const Index = () => {
  return (
    <View style={styles.header}>
            <Icon name="menu" color="white" size={35} />
            <Icon name="search" color="white" size={35} />
    </View>

  )
}

export default Index

const styles = StyleSheet.create({
    header: {
        height:55,
        backgroundColor: "purple",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    }
})