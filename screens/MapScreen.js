import React, { useContext } from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationContext from "../services/LocationContext";
import RestaurantsContext from '../services/RestaurantContext';

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { data } = useContext(RestaurantsContext);
  
  return (
    <SafeAreaView styles={styles.container}>
      <MapView
        style={styles.map}
         provider= {PROVIDER_GOOGLE}
        // initialRegion={{
        //   latitude: location.latitude,
        //   longitude: location.longitude,
        //   latitudeDelta: 0.001,
        //   longitudeDelta: 0.001,
        // }}
        initialCamera={{
          center: { latitude: location.latitude,  longitude: location.longitude },
          pitch: 0,
          zoom: 15,
          heading: 0,
          altitude: 1000,
        }}
        mapType="standard"
      >

      {data.map((marker, index) => {
         return <Marker
            key={index}
            coordinate={{
               latitude: parseFloat(marker?.latitude ? marker.latitude : location.latitude,),
               longitude: parseFloat(marker?.longitude ? marker.longitude : location.longitude),
            }}
            title={marker.name}
            image={require('../assets/marker_rico.png')}
          />
          })}
        <Marker
          key={1}
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude
          }}
        />
      </MapView>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
