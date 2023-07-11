import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigation/Navigation';
import 'react-native-gesture-handler';

export default function App(){
  return (
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  );
}


