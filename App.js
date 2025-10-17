import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Deals from './screens/Deals';
import Trips from './screens/Trips';
import Account from './screens/Account';
import MapScreen from './screens/MapScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let name = 'home';
            if (route.name === 'Home') name = 'home';
            else if (route.name === 'Ưu đãi') name = 'pricetags';
            else if (route.name === 'Lịch trình') name = 'calendar';
            else if (route.name === 'Hồ sơ') name = 'person';
            return <Ionicons name={name} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1E90FF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ưu đãi" component={Deals} />
        <Tab.Screen name="Lịch trình" component={Trips} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Hồ sơ" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
