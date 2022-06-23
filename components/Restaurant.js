import { Text, Image, StyleSheet } from "react-native";
import { Card, Icon } from '@rneui/themed';
import { Button } from "@rneui/base";
import { useState, useContext } from "react";
import { storeData, getData, removeValue } from "../services/AsyncStorage";
import RestaurantsContext from "../services/RestaurantContext";

export default ({ restaurant }) => {
    //const [isAdded, setIsAdded] = useState();
    const { isFavorite, setIsFavorite } = useContext(RestaurantsContext);


    const storage = () => {
        if (!isFavorite) {
            storeData(restaurant.location_id, restaurant);

            setIsFavorite(true);
        } else {
            removeValue(restaurant.location_id);

            setIsFavorite(false);
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
                {isFavorite ? <Icon name="bookmark" color="#ff6600" /> : <Icon name="bookmark-outline" color="#ff6600" />}
                {/* {getData(restaurant.location_id) != undefined ? <Icon name="bookmark" color="#ff6600" /> : <Icon name="bookmark-outline" color="#ff6600" />}     */}
            </Button>          
        </Card>        
    );
};
