import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigation/Navigation';
import 'react-native-gesture-handler';
import store from './src/store/index';
import {Provider} from 'react-redux';

export default function App(){
  return (
  
      <NavigationContainer>
         <Provider store ={store}>
          <HomeStackNavigator/>
          </Provider>
    </NavigationContainer>
  
  );
}


