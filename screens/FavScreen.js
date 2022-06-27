import React, { useCallback, useState } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { importData } from '../services/AsyncStorage/index';
import Favorite from '../components/Favorite';

import { useFocusEffect } from '@react-navigation/native';

const FavScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState(null);
  const [reloadData, setReloadData] = useState(false);

  useFocusEffect(
    useCallback(() => {
      importData().then(data => {
        setRestaurants(data);
      });
      setReloadData(false);
    }, [reloadData])
  );


  return (
    <View style={styles.container}>
      <Text>Favoritos</Text>
       <FlatList
          data={restaurants}
          //keyExtractor={(item, index) => index.toString() }
          renderItem={(restaurant) => (
            <Favorite
              restaurant={restaurant}
              navigation={navigation}
              setReloadData={setReloadData}
            />
          )}
        />        
    </View>
  );
}

export default FavScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },

});