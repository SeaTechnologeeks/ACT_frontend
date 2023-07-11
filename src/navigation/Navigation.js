import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Login from '../screens/Login';


const stack = createStackNavigator();
const screenOptionsStyle = {
    headerShown:false,
};


const HomeStackNavigator =() => {
    return (
        <stack.Navigator screenOptions={screenOptionsStyle}>
            { /*<stack.Screen name ="splash" component={Splash}/> */}
            <stack.Screen name ="login" component={Login}/>
            <stack.Screen name ="home" component={Home}/>
        </stack.Navigator>
    );
};

export default HomeStackNavigator;
