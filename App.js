import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { getCurrentLocation } from './utils/helpers';
import LocationContext, { locationObject } from './services/LocationContext';

const App = () => {

  const [location, setLocation] = useState(locationObject)

  useEffect(() => {
    (async () => {
      const response = await getCurrentLocation();
      if (response.status) {

        // console.log("Location ", response.location)
        setLocation(response.location)

      }
    })() //asincrono autollamado
  }, [])

  return (
    //context
    <LocationContext.Provider value={{location}}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </LocationContext.Provider>

    //context
  );
}

export default App;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Rico App</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
