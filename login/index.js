import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { useContext, useEffect } from "react";
import authenticationContext from "../services/authenticationContxt";
import { StatusBar } from "expo-status-bar";
//import * as GoogleSignIn from "expo-google-sign-in";


const Login = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "162646232099-rfc00gltvboipta6und49e4m3vgvsjrs.apps.googleusercontent.com",
  });

  //guardo la data en el estado global
  const { authenticationData, setAuthenticationData } = useContext(
    authenticationContext
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`
      )
        .then((res) => res.json())
        //me modifica el estado global
        .then((data) => setAuthenticationData(data));
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/RicoLogo.png')} style={{padding:40, margin: 40}}></Image>
      <StatusBar style="auto" />
      <TouchableOpacity 
        style={[styles.customButton, styles.shadowProp]}
        //title="Continuar con Google"
        onPress={() => {
          //TODO: Redireccionar al home
          promptAsync();
        }}
      >
        <Image source={require('../assets/google_logo.png')} 
              style={styles.googleImg}/>
        <Text style={styles.buttonTxt}>Continuar con Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  customButton: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#666666",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  googleImg: {
    width: 30,
    height: 30,
    position: "absolute", 
    margin: 15
  },
  buttonTxt: {
    paddingLeft: 40,
    color: "#666666",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default Login;
