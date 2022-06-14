import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';

const App = () => {

  return (
        <NavigationContainer>
        <Tabs />
        <StatusBar style="auto" />
        </NavigationContainer>
  );
}

export default App;

