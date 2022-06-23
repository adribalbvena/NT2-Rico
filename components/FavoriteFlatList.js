import { useCallback } from "react";
import { Text, View, FlatList } from "react-native"
import Favorite from "./Favorite";

export default ({ favorites }) => {

    const renderFavorite = useCallback(({item}) => <Favorite favorite={item} />);

    return (
        <FlatList
            renderItem={renderFavorite}
            data={favorites}
        />
    );
}