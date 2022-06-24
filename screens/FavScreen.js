import React, { useCallback, useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { importData } from '../services/AsyncStorage';
import Favorite from '../components/Favorite';
import RestaurantFlatList from '../components/RestaurantFlatList';

import { useFocusEffect } from '@react-navigation/native';

const FavScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState(null);
  const [reloadData, setReloadData] = useState(false);

  //Falta traer el contexto de autenticacion y hacer un if que diga q si esta logeado me muestre los favoritos de ese usuario
  useFocusEffect(
    useCallback(() => {
      importData().then(data => {
        setRestaurants(data);
      });
      setReloadData(false);
    }, [reloadData])
  );


  return (
    <View>
        <FlatList
            data={restaurants}
            //keyExtractor={(item, index) => index.toString() }
            renderItem={(restaurant) => (
            <Favorite
                restaurant={restaurant}
                //setLoading={setLoading}
                navigation={navigation}
                setReloadData={setReloadData}
            />
            )}
         />  
    </View>


  );
}

export default FavScreen;
