import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight} from 'react-native';


export default function Form({addHandler }) {
    const [text, setValue] = useState('');
    
    const onChange = (text) => {
        setValue(text);
    };


    return(
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} onChangeText={onChange} placeholder='Добавить новую заметку' />
                <Button onPress={() => addHandler(text)} title='Добавить заметку' />
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
  input:{
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 20,
    width: 300
  }
});
