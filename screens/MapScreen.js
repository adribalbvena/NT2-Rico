import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MapView, { Marker, Pilyline } from "react-native-maps";
import LocationContext from "../services/LocationContext";
import { getCurrentLocation } from '../utils/helpers';

const MapScreen = ({ navigation }) => {

  const { location } = useContext(LocationContext)

  useEffect(() => {
    console.log("contexto dentro de MAP", location)
  }, [location])

  return (
    <View styles={styles.container}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
        mapType='standard'
      >

        {/* TODO: Arreglar Marker */}
        {/* <Marker>
        </Marker> */}
        {/* <Marker key={1} coordinate={{latitude: orientacion.latit, longitude: orientacion.long}}/> */}

      </MapView> 
      {/* <Button title="Click Here" onPress={() => alert("Button Clicked!")}/> */}
    </View>
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
