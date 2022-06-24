import { Text, Alert, Image, StyleSheet } from "react-native";
import { Card, Icon } from '@rneui/themed';
import { removeValue } from '../services/AsyncStorage/index';

export default ({ restaurant, navigation, setReloadData }) => {
    const {location_id, name, address, phone, rating, photo} = restaurant.item;

    const confirmRemoveFavorite = () => {
        Alert.alert(
            "Eliminar restaurante de favoritos",
            "¿Está seguro de querer borrar el restaurante de favoritos?",
            [
                {
                    text: "No",
                },
                {
                    text: "Sí",
                    onPress: removeFavorite
                }
            ],
            { cancelable: false }
        )
    }

    const removeFavorite = async() => {
        removeValue(location_id);
        setReloadData(true);
    }


    
    return (
            <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>{name}</Card.Title>
            <Card.Divider />
            <Image source={{uri: photo}} style={{height: 200, width: 250, marginBottom: 15}} />
            <Text h1>
                Dirección: {address}
            </Text>
            <Text h2>
                Teléfono: {phone}
            </Text>
            <Text h3>
                Puntuación: {rating}
            </Text>
            <Icon 
            name="bookmark"
            onPress={confirmRemoveFavorite}
            color="#ff6600"
            style={{flexDirection: "row", justifyContent: "flex-end"}}
            />
        </Card>        
    );  
};