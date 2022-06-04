import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import FavScreen from '../screens/FavScreen';


const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return(
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
            
        </Tab.Navigator>

    );
}

export default Tabs;