import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Animated} from 'react-native';

export default function Form({addHandler }) {
    const [text, setValue] = useState('');
    
    const onChange = (text) => {
        setValue(text);
    };


    return(
        <View style={styles.container}>
            <View style= {styles.form}>
                <TextInput style={styles.input} onChangeText={onChange} placeholder='Добавить ToDo' />
                <TouchableHighlight style={styles.but} onPress={() => addHandler(text)} >
                  <Text>Todo</Text> 
                </TouchableHighlight>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
  input:{
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 40,
    width: 400,
    backgroundColor: "white"
  },
  but:{
    backgroundColor:"#1a6600",
    color: "white",
    marginTop: 10,

  },
  form:{
    borderColor: "green",
    borderWidth: 2,
    backgroundColor: "green",
    marginTop: 10
  }
});
