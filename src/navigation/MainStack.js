import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import AuthStack from './AuthStack';
import Results from '../screens/Results';
import QRscanner from '../components/QRscanner';


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
        <Drawer.Screen name="Results" component={Results}/>
        <Drawer.Screen name="scanner" component={QRscanner}/>
      
      
      
    </Drawer.Navigator>
  );
}




export default MainStack;