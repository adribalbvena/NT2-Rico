import React, { useState, useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import FavScreen from '../screens/FavScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { getCurrentLocation } from '../utils/helpers';
import LocationContext, {locationObject} from '../services/LocationContext';
import axios from 'axios';
import RestaurantsContext, {restaurantsObject} from '../services/RestaurantContext';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    const [location, setLocation] = useState(locationObject);
    const [data, setData] = useState(restaurantsObject);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async () => {
        const response = await getCurrentLocation();
        if (response.status) { 
          setLocation(response.location)
          setIsLoading(true);
          axios
          .get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`, {
            params: {
              latitude: response.location.latitude,
              longitude: response.location.longitude,
              limit: '4',
              currency: 'USD',
              distance: '2',
              open_now: 'false',
              lunit: 'km',
              lang: 'es_ES'
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '4b1c5feb47msh11333100d7627a8p1a682bjsn19c7b4c54056'
            }
          })
          .then((res) => {
            const result = res.data.data;
            setData(result
              .filter(res => res.name != undefined)
              .map(res => ({location_id: res.location_id, 
                            name: res.name, 
                            address: res.address, 
                            phone: res.phone, 
                            rating: res.rating, 
                            latitude: res.latitude, 
                            longitude: res.longitude, 
                            photo: res.photo.images.original.url})));
            setIsLoading(false);
          });  
        }
      })() //asincrono autollamado
    }, []);


    return(
    <RestaurantsContext.Provider value={{data, isLoading}}>
    <LocationContext.Provider value={{location}}>
        <Tab.Navigator
            initialRouteName= "Home"
            activeColor="#ffff"
            inactiveColor="#ffc299"
            barStyle={{ backgroundColor: '#ff6600'}} >
         
             <Tab.Screen 
             name="Home"
             component={HomeScreen}
             options= {{
                 tabBarLabel: 'Explorar',
                 tabBarIcon: ({ color }) => (
                 <MaterialCommunityIcons name="home" color={color} size={26} />
                 ),
             }}
            />
             <Tab.Screen 
             name="Maps" 
             component={MapScreen}
             options= {{
                tabBarLabel: 'Mapas',
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="map-marker" color={color} size={26} />
                ),
            }} />
             <Tab.Screen 
             name="Favoritos" 
             component={FavScreen}
             options= {{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bookmark" color={color} size={26} />
                ),
            }} />
             <Tab.Screen 
             name="Perfil" 
             component={ProfileScreen}
             options= {{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }} />            
        </Tab.Navigator>
    </LocationContext.Provider>
    </RestaurantsContext.Provider>
    );
}

export default Tabs;