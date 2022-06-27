import { Text, StyleSheet, Image } from "react-native";
import { Card, Icon } from '@rneui/themed';
import { useState, useCallback } from "react";
import { storeData, getIsFavorite, removeValue } from "../services/AsyncStorage/index";
import { useFocusEffect } from '@react-navigation/native';


export default ({ restaurant }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    useFocusEffect(
        useCallback(() => {
            (async() => {
                if(restaurant) {
                    const response = await getIsFavorite(restaurant.location_id);
                    response.statusRespone && setIsFavorite(response.isFavorite);
                }
            })()
        }, [restaurant])
      );
    
    const addFavorite = () => {
        storeData(restaurant.location_id, restaurant);
        setIsFavorite(true);
    }

    const removeFavorite = () => {
        removeValue(restaurant.location_id);
        setIsFavorite(false);
    }
    
    return (
            <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>{restaurant.name}</Card.Title>
            <Card.Divider />
            {/* <Image source={{uri: restaurant.photo}} style={{ height: 200, width: 250, marginBottom: 15, alignSelf: "center"}} /> */}
            <Text h1>
                Dirección: {restaurant.address}
            </Text>
            <Text h2>
                Teléfono: {restaurant.phone}
            </Text>
            <Text h3>
                Puntuación: {restaurant.rating}
            </Text>
            <Icon 
            name={isFavorite ? "bookmark" : "bookmark-outline"}
            onPress={isFavorite ? removeFavorite : addFavorite}
            color="#ff6600"
            style={{flexDirection: "row", justifyContent: "flex-end"}}
            />
        </Card>    
            
    );
};