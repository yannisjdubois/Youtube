import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Image, Icon } from "@rneui/themed";


const Details = ({ route, navigation }) => {
  const { item } = route.params;
  console.log (item)

  return (
    <View style={styles.detailsview}>
        <Image
          style={styles.videoselect}
          // style={{width:350,height:200}}
          resizeMode="cover"
          source={item.image}
        />
        <View style={styles.icons}>
          <Icon
          raised
          name='like1'
          type='antdesign'
          color='black'
          onPress={() => console.log('hello')} />
          <Icon
          raised
          name='dislike1'
          type='antdesign'
          color='black'
          onPress={() => console.log('hello')} />
          <Icon
          raised
          name='share-a'
          type='fontisto'
          color='black'
          onPress={() => console.log('hello')} />
          <Icon
          raised
          name='list'
          type='font-awesome'
          color='black'
          onPress={() => console.log('hello')} />
        </View>

      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>


    </View>
    
  )
}

export default Details

const styles = StyleSheet.create({
  videoselect: {
    width:350,
    height:200
  },

  detailsview: {
    margin: 25,
  },

  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'

  },

})