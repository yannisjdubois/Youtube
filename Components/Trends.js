import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import {videos} from '../constantes/videos'
import Mini from './Cards/mini'



const Trends = () => {
  return (
        <View>
            <FlatList
            style={styles.flat}
            horizontal
            data={videos}
            renderItem={({item}) => (

                <Mini item={item} />
            )}
            keyExtractor={item => item.id}
            />
        </View>


  )
}

export default Trends

const styles = StyleSheet.create({
    flat: {
        margin: 5
    }
})