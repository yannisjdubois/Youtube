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
        <View style={styles.horizontal}>
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
        
      <View style={styles.horizontal}>
        <Text style={styles.titredate}>{item.titre}</Text>
        <Text style={styles.titredate}>{item.date}</Text>
      </View>

      <Text></Text>
      
      <Text>{item.description}</Text>


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

  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'

  },

  titredate: {
    fontWeight: '700'
  },

})