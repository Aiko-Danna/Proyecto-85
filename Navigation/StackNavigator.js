import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import BottomTabNavigator from './TabNavigator';
import PostScreen from '../Screens/PostScreen';

const Stack = createStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="PostScreen" component={PostScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;