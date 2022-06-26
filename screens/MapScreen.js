import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationContext from "../services/LocationContext";
import RestaurantsContext from '../services/RestaurantContext';

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { data } = useContext(RestaurantsContext);
  
  return (
    <SafeAreaView styles={styles.container}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 52.3015493,
          longitude: 4.6939769,
         // latitude: location.latitude,
         // longitude: location.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
