import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';


const stack = createStackNavigator();
const screenOptionsStyle = {
    headerShown:false,
    
};


const AuthStack =() => {
    return (
        <stack.Navigator screenOptions={screenOptionsStyle} sceneAnimationEnabled={true}>
            
            <stack.Screen name ="welcome" component={Welcome}/>
            <stack.Screen name ="register" component={Register}/>
            <stack.Screen name ="login" component={Login}/>
            <stack.Screen name ="dashboard" component={Dashboard}/>
        </stack.Navigator>
    );
};

export default AuthStack;
