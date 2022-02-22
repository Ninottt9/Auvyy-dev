import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import LoginScreen from './App/Screens/LoginScreen.js'
import MainScreen from './App/Screens/MainScreen.js';
import WelcomeScreen from './App/Screens/WelcomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}