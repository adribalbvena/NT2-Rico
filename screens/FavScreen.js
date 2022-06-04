import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const FavScreen = ({navigation}) => {
  return (
    <View>
        <Text>Favoritos</Text>
        <Button title="Click Here" onPress={() => alert("Button Clicked!")}/>
    </View>
  );
}

export default FavScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8fcbbc"
    },
});