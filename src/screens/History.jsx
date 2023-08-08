import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Text, View } from 'react-native'

const History = () => {
  return (
  <View> 
   <Ionicons name="md-checkmark-circle" size={32} color="green" />
   <MaterialCommunityIcons name="home"  size={32} />

  </View>
  )
}

export default History