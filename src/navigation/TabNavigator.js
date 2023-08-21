import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import Login from '../screens/Login';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();




const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator screenOptions={({route}) => (
      {
        headerShown:false,
        tabBarShowLabel:true,
        tabBarStyle:{backgroundColor:'black'},
        tabBarIcon: ({color, size, focused}) => {
         
            const  name  = route.name;
          
            if(name === "Home"){
              
           return   <Ionicons name={'home'} size={size} color={'white'}/>
            }
            else {
             return <Ionicons name={'file-tray-full-outline'} size={size} color={'white'}/>

            }
          
        },
        tabBarHideOnKeyboard:true,
        tabBarAllowFontScaling:true,
        tabBarLabelStyle:{color:'white'}

    }
    )}>
        
        <Tab.Screen name="Home" component={Dashboard}  />
        <Tab.Screen name="History" component={History}  />
       
    </Tab.Navigator>
  )
}

export default TabNavigator