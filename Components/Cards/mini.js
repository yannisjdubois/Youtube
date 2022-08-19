import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Image } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

const mini = ({item}) => {

  const navigation = useNavigation();

  return (
    // <View style={styles.minicard}>
    //     <Text>{item.image}</Text>
    //     <Text>{item.titre}</Text>
    // </View>

    <View style={{position:"relative",alignItems:"center"}}>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {item: item}) }
      >
        <Image
          style={{width:150,height:100}}
          resizeMode="cover"
          source={item.image}
        />
      </TouchableOpacity>


      <Card.Divider/>
      <Card.Title>{item.titre}</Card.Title>
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