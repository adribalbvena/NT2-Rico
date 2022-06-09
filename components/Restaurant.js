import { Text, Image } from "react-native";
import { Card } from '@rneui/themed';
//import { Image } from '@rneui/themed';


export default ({ restaurant }) => {
    return (
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>{restaurant.name}</Card.Title>
            {/* <Image source={{uri: restaurant.photo.images.small.uri}}/> */}
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
        </Card>
    )
}