import { StyleSheet, Text, View, FlatList, Button, Alert, SafeAreaView } from 'react-native'
import React from 'react'
import { categories } from '../constantes/categories'
import {videos} from '../constantes/videos'
import Maxi from './Cards/maxi'

const Content = () => {
  return (
    <SafeAreaView
    // style={{flex:1}}
    >
      <View>
        <FlatList
        style={styles.categories}
        horizontal
        data={categories}
        renderItem={({item}) => (
          <Text style={styles.categobutton}>
            <Button
              title={item.titre}
              onPress={() => navigation.navigate('Details')}
            />
          </Text>
        )}
        keyExtractor={item => item.id}
        />
      </View>


      <View>
        {/* <Text>
            qqch
            
        </Text> */}

          <FlatList
            style={styles.videosmax}
            data={videos}
            renderItem={({item}) => (

              <Maxi item={item} />
            )}
            keyExtractor={item => item.id}
          />

      </View>

    </SafeAreaView>



  )
}

export default Content

const styles = StyleSheet.create({
  categobutton:{
    padding: 4
  }

})