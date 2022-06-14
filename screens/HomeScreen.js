import React, { useContext } from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantFlatList from '../components/RestaurantFlatList';
import RestaurantsContext from '../services/RestaurantContext';

const HomeScreen = ({ navigation }) => {
  const { data, isLoading } = useContext(RestaurantsContext);

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