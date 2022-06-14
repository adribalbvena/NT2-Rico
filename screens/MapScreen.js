import React, {useEffect} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MapView, { Marker, Pilyline } from "react-native-maps";
import { getCurrentLocation } from '../utils/helpers';

const MapScreen = ({ navigation }) => {

  const orientacion = {
    long: -58.528763,
    latit: -34.558106
    // long: -84.419853,
    // latit: 33.640411
  };

  // React.useEffect(() => {
  //   getCurrentLocation()
  // }, [])


  return (
    <View styles={styles.container}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: orientacion.latit,
          longitude: orientacion.long,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
        mapType='standard'
      >

      <Marker key={1} coordinate={{latitude: orientacion.latit, longitude: orientacion.long}}/>
        
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
