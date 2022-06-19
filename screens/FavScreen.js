import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { importData } from '../services/AsyncStorage';
import RestaurantFlatList from '../components/RestaurantFlatList';
import FavoriteContext from '../services/FavoriteContext';

const FavScreen = ({navigation}) => {
const {isAdded, setIsAdded} = useContext(FavoriteContext);
const [rest, setRest] = useState();

  useEffect(() => {
    importData().then(data => {
      //console.log("Encontro data?", data);
        setRest(data);
           
    });
  }, [rest]) //con la dependencia rest para q cada vez q agrego o quito un favorito se ejecute

  return (

    <SafeAreaView >
    <Text>Favoritos</Text>
    <SafeAreaView>
      <RestaurantFlatList restaurants={rest} navigation={navigation} />
    </SafeAreaView>

  </SafeAreaView>

  );
}

export default FavScreen;
