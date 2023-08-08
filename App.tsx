import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import store from './src/store/index';
import {Provider} from 'react-redux';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';

export default function App(){

  
  return (
  
      <NavigationContainer>
         <Provider store ={store}>
        
          <MainStack/>
          </Provider>
    </NavigationContainer>
  
  );
}


