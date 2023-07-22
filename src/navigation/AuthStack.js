import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';


const stack = createStackNavigator();
const screenOptionsStyle = {
    headerShown:false,
};


const AuthStack =() => {
    return (
        <stack.Navigator screenOptions={screenOptionsStyle}>
            
            <stack.Screen name ="welcome" component={Welcome}/>
            <stack.Screen name ="login" component={Login}/>
        </stack.Navigator>
    );
};

export default AuthStack;
