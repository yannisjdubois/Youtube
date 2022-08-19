import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Icon } from "@rneui/themed";


const Index = ({navigation}) => {
  return (
    <View style={styles.header}>
            <Icon name="menu" color="white" size={35} />
            <Icon name="search" color="white" size={35}/>
    </View>

  )
}

export default Index

const styles = StyleSheet.create({
    header: {
        height:55,
        backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    }
})