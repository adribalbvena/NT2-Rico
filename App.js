import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import Login from "../NT2-Rico/login/index";
import AuthenticationContxt, {
  authData,
} from "./services/authenticationContxt/index";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  const [authenticationData, setAuthenticationData] = useState(authData);
  return (
    // <AuthenticationContxt.Provider
    //   value={{ authenticationData, setAuthenticationData }}
    // >
      <NavigationContainer>
        <Tabs />
            <StatusBar style="auto" />
        {/* {authenticationData.id ? (
          <>
            <Tabs />
            <StatusBar style="auto" />
          </>
        ) : (
          <Login />
        )} */}
      </NavigationContainer>
    // </AuthenticationContxt.Provider>
  );
};

export default App;
