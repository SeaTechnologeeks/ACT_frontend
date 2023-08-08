import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import CustomDrawer from '../components/CustomDrawer';
import TopNav from '../components/TopNav';
import TabNavigator from './TabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';


const Drawer = createDrawerNavigator();
const stack = createStackNavigator();



const MainStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/> } screenOptions={{headerShown:false}}>
         <Drawer.Screen name='Auth' component={AuthStack}/>
        <Drawer.Screen name="Dashboard" component={TabNavigator}/>
       
        <Drawer.Screen name="profile" component={Profile}/>
        <Drawer.Screen name="icon" component={TopNav}/>
    </Drawer.Navigator>
  );
}




export default MainStack;