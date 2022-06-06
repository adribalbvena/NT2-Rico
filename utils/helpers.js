import * as Location from "expo-location";
import { Alert } from "react-native";

export const getCurrentLocation = async() => {
    const response = {status: false, location: null};
    const resultPermissions = await Location.getForegroundPermissionsAsync();
    if (resultPermissions.status == "denied") {
        Alert.alert("Debes dar permiso para la localización");
        return response;
    }
    const position = await Location.getCurrentPositionAsync({});
    const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    }
    response.status = true;
    response.location = location;
    return response;
}