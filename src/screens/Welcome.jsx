import React from 'react';
import VideoBackground from '../components/Video';
import Styles from '../styles/Styles';
import {  View,ScrollView,  Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';







function Welcome({navigation}) { 


  

  return (
   <View style={Styles.container}>
     <VideoBackground />

      <ScrollView contentContainerStyle={{
        flex:1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
       
      }}>
         <View style={Styles.WelcomeContainer}>
         <BlurView intensity={20}>
       
       <TouchableOpacity style={Styles.GuestButton}  onPress={()  => navigation.navigate('login')}>
                 <Text style={Styles.text}>Get Started</Text>
               </TouchableOpacity>
      
       </BlurView>
         </View>
      </ScrollView>
   </View>
   
  )
}

export default Welcome