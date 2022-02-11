import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import LoginScreen from './App/Screens/LoginScreen.js'
import MainScreen from './App/Screens/MainScreen.js';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}