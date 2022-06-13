import React, { useContext } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RestaurantFlatList from '../components/RestaurantFlatList';
import LocationContext from '../services/LocationContext';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { location } = useContext(LocationContext)

  useEffect(() => {
    setIsLoading(true);

    if (location.latitude) {
      //TODO Hacer lo que tengas que hacer
      console.log("contexto dentro de HOME", location)

      axios
        .get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`, {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            limit: '4',
            currency: 'USD',
            distance: '2',
            open_now: 'false',
            lunit: 'km',
            lang: 'es_ES'
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '4e5c5cb8d8msh9d1b9beebcf6c74p129864jsn70b0455404fb'
          }
        })
        .then((res) => {
          setData(res.data.data);
          setIsLoading(false);
        });
    }




  }, [location])

  return (

    <SafeAreaView style={styles.container}>
      <Text>{isLoading ? "Cargando..." : "Explorar"}</Text>
      <SafeAreaView>
        <RestaurantFlatList restaurants={data} navigation={navigation} />
      </SafeAreaView>

    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
});