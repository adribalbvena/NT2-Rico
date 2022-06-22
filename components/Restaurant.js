import { Text, Image, StyleSheet } from "react-native";
import { Card, Icon } from '@rneui/themed';
import { Button } from "@rneui/base";
import { useEffect, useState } from "react";
import { storeData, removeItemData, clearAll } from "../services/AsyncStorage";
import FavoriteContext, { favoriteObject } from "../services/FavoriteContext";

export default ({ restaurant }) => {
    const [isAdded, setIsAdded] = useState();

    const storage = () => {
        if (!isAdded) {
            storeData(restaurant.location_id, restaurant);
            setIsAdded(true);
        } else {
            removeItemData(restaurant);
            setIsAdded(false);
        }      
    }
    
    return (
            <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>{restaurant.name}</Card.Title>
            <Card.Divider />
            <Text h1>
                Dirección: {restaurant.address}
            </Text>
            <Text h2>
                Teléfono: {restaurant.phone}
            </Text>
            <Text h3>
                Puntuación: {restaurant.rating}
            </Text>
            <Button type="clear" 
            style={{flexDirection: "row", justifyContent: "flex-end"}}
            onPress={storage}>
                {isAdded ? <Icon name="bookmark" color="#ff6600" /> : <Icon name="bookmark-outline" color="#ff6600" />}    
            </Button>          
        </Card>        
    );
};
