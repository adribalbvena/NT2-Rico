import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import Login from "../NT2-Rico/login/index";
import AuthenticationContxt, {
  authData,
} from "./services/authenticationContxt/index";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { storeData, clearAll, getData } from "./services/AsyncStorage";

const App = () => {
  const [authenticationData, setAuthenticationData] = useState(authData);

  useEffect(() => {
    console.log("Aqui les demuestro que la data si esta guardada en la cache");

    getData("authData").then((data) => {
      console.log("Encontro data?", data);
      //pregunto si existe la data && si existe el id
      if (data?.id) {
        setAuthenticationData(data);
      }
    });
  }, []);

  // si el authenticationdata cambia yo guardo esa info
  useEffect(
    useCallback(() => {
      setTimeout(() => {
        if (authenticationData.id) {
          storeData("authData", authenticationData);
        } else {
          //si no tengo data borro el cache
          clearAll();
        }
      });
    }),
    [authenticationData]
  );

  return (
    <AuthenticationContxt.Provider
      value={{ authenticationData, setAuthenticationData }}
    >
      <NavigationContainer>
        {authenticationData.id ? (
          <>
            <Tabs />
            <StatusBar style="auto" />
          </>
        ) : (
          <Login />
        )}
      </NavigationContainer>
    </AuthenticationContxt.Provider>
  );
};

export default App;
