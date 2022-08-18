import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Image } from "@rneui/themed";


const Details = ({item}) => {
  return (
    <View>
        <Image
          style={styles.videoselect}
          style={{width:350,height:200}}
          resizeMode="cover"
          // source={item.image}
        />
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      <Button
              style={styles.boutonlecture}
              title={"Lire"}
              onPress={""}
            />


    </View>
    
  )
}

export default Details

const styles = StyleSheet.create({
  // videoselect: {
  //   margin: 50
  // },

  boutonlecture: {
    margin: 100
  }

})