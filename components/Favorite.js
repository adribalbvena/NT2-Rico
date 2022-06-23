import { Text, Image, StyleSheet } from "react-native";
import { Card, Icon } from '@rneui/themed';
import { Button } from "@rneui/base";
import { useEffect, useState, useContext } from "react";
import { storeData, removeValue } from "../services/AsyncStorage";
import RestaurantsContext from "../services/RestaurantContext";

export default ({ favorite }) => {
    //const [isFavorite, setIsFavorite] = useState(true);
    const { isFavorite, setIsFavorite } = useContext(RestaurantsContext);

    // useEffect(() => {
    //   favorite.setIsFavorite(true);
    // }, [])
    

    const removeFavorite = () => {
            removeValue(favorite.location_id);
            setIsFavorite(false);           
    }
    
    return (
            <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>{favorite.name}</Card.Title>
            <Card.Divider />
            <Text h1>
                Dirección: {favorite.address}
            </Text>
            <Text h2>
                Teléfono: {favorite.phone}
            </Text>
            <Text h3>
                Puntuación: {favorite.rating}
            </Text>
            <Button type="clear" 
            style={{flexDirection: "row", justifyContent: "flex-end"}}
            onPress={removeFavorite}>
                {isFavorite ? <Icon name="bookmark" color="#ff6600" /> : null }    
            </Button>          
        </Card>        
    );
};