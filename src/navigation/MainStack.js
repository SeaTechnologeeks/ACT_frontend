import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import AuthStack from './AuthStack';


const Drawer = createDrawerNavigator();




const MainStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/> } screenOptions={{
      headerShown:false,
      drawerActiveBackgroundColor:'#48B6E4',
      drawerItemStyle:{backgroundColor:'#48B6E4'}
      }}>
        <Drawer.Screen name ="Auth" component={AuthStack}/>
        <Drawer.Screen name="Main" component={TabNavigator}/>
        <Drawer.Screen name="profile" component={Profile}/>
        <Drawer.Screen name ="settings" component={Settings}/>
      
      
    </Drawer.Navigator>
  );
}




export default MainStack;