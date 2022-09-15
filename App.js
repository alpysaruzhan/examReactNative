import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import List from './List';
import Form from './Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {
      key: '1',
      text:
        "Купить продукты"
    },
    {
      key: '2',
      text:
        "Поздравить Алису с днем рождения "
    },
    {
      key: '3',
      text:
        "Убраться дома "
    },
    {
      key: '4',
      text:
        "Сделать домашнее задание"
    },
    {
      key: '5',
      text:
        "Убраться"
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
      <Text style={styles.text}>ToDo List</Text>


      <Form addHandler={addHandler} />
      <FlatList  data={listOfItems} renderItem={({item})=> (
        <View style={styles.con}>
          <List el={item} deleteHandler={deleteHandler} />
        </View>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ade69a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  con:{
    marginTop: 15,
    backgroundColor: "white",
    width: 400,
    borderColor: "green",
    borderWidth: 1
  },
  text:{
    marginTop: 40,
    fontSize: 20,
    color: "green"
  }
});
