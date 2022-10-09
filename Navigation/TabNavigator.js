import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../Screens/Feed';
import CreatePostScreen from '../Screens/CreatePost';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === 'Índice') {
                        iconName = focused
                        ? 'book'
                        : 'book-outline';
                    } else if (route.name === 'CrearPost') {
                        iconName = focused? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name='Índice' component={FeedScreen} />
            <Tab.Screen name='CrearPost' component={CreatePostScreen} />

        </Tab.Navigator>
    );
}

export default BottomTabNavigator;