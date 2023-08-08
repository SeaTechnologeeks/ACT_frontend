import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import Login from '../screens/Login';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons';



const Tab = createBottomTabNavigator();




const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel:true,
       

    }}>
        <Tab.Screen name="Home" component={Dashboard}  options={{
            tabBarIcon:({color ,size}) => {
                <MaterialCommunityIcons name="home"  color={'#fff'} size={32} />

            }
        }}/>
        <Tab.Screen name="History" component={History}  options={{
            tabBarIcon:() => {
                <Ionicons name="md-checkmark-circle" size={32} color="green" />

            }
        }}/>
        <Tab.Screen name="Profile" component={Login}/>
    </Tab.Navigator>
  )
}

export default TabNavigator