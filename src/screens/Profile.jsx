import React from 'react'
import { Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'


const Profile = () => {
  return (
    <View> 
    <Ionicons name="md-checkmark-circle" size={32} color="green" />
    <MaterialCommunityIcons name="home"  size={32} />
 
   </View>
  )
}

export default Profile