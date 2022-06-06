import { useCallback } from "react";
import { Text, View, FlatList } from "react-native"
import Restaurant from "./Restaurant";

export default ({ restaurants }) => {

    const renderRestaurant = useCallback(({item}) => <Restaurant restaurant={item} />)

    return (
        <FlatList
            renderItem={renderRestaurant}
            data={restaurants}
        />

    )
}