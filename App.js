import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import List from './List';
import Form from './Form';
export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {
      key: '1',
      text:
        "Привет Мир!! Идейные соображения высшего порядка, а также консультация с широким активом требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. "
    },
    {
      key: '2',
      text:
        "Всех с 1 сентября!! Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения новых предложений"
    },
    {
      key: '3',
      text:
        "Товарищи! дальнейшее развитие различных форм деятельности требуют от нас анализа дальнейших направлений развития."
    }
  ])
  
  const deleteHandler = (key) =>{
    setListOfItems((list) =>{
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  const addHandler = (text) =>{
    setListOfItems((list) =>{
      return[
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Text>Заметки</Text>
      <Form addHandler={addHandler} />
      <FlatList data={listOfItems} renderItem={({item})=> (
        <List el={item} deleteHandler={deleteHandler} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
