import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Home from './src/components/Home'
import Details from './src/components/Details'

const Stack = createStackNavigator();

function MainStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}


export const Router = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}