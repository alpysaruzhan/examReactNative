import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function List({el, deleteHandler}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
            </TouchableOpacity>
        </View>
    ) 
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }, 
  text:{
    padding: 10,
    textAlign:'center',
    width: '30%',

  }
});
