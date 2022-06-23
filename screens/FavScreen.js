import React, { useCallback, useContext, useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { importData } from '../services/AsyncStorage';
import FavoriteFlatList from '../components/FavoriteFlatList';
import { useFocusEffect } from '@react-navigation/native';

const FavScreen = ({ navigation }) => {
  const [rest, setRest] = useState();

  useFocusEffect(
    useCallback(() => {
      //console.log("Aqui volvi a entrar en la vista")
      importData().then(data => {
        //console.log("Encontro data?", data);
        setRest(data);
        //console.log("seteo data?", rest);
      });
    }, [])
  );


  return (

    <SafeAreaView >
      <Text>Favoritos</Text>
      <SafeAreaView>
        <FavoriteFlatList favorites={rest} navigation={navigation} />
      </SafeAreaView>

    </SafeAreaView>

  );
}

export default FavScreen;
