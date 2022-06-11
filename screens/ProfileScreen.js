import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Mi Perfil</Text>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8fcbbc"
    },
});