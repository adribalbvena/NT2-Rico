import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
//import profileService from "../services/profileContext/index";
import { useEffect, useState, useContext } from "react";
import { Avatar } from "@rneui/themed";
import { Card } from "@rneui/themed";
import authenticationContext, {
  authData,
} from "../services/authenticationContxt";

const ProfileScreen = ({ navigation }) => {
  const { authenticationData, setAuthenticationData } = useContext(
    authenticationContext
  );

  const logout = () => {
    console.log(authData);
    //vacia la variable global
    setAuthenticationData(authData);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 30,
        }}
      >
        <Avatar
          size={120}
          rounded
          source={
            authenticationData.picture
              ? { uri: authenticationData.picture }
              : {}
          }
        />
      </View>
      <View>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>Información de Contacto</Card.Title>
          <Card.Divider />
          <Text h1>Nombre: {authenticationData.name}</Text>
          <Text h2>Email: {authenticationData.email}</Text>
        </Card>
      </View>
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={logout}> 
          <Text style={styles.txt}>Salir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  image: {
    height: 50,
    width: 50,
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ff6600",
  },
  txt: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "bold",
  }

});
