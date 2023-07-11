import React from 'react';
import VideoBackground from '../components/Video';
import Styles from '../styles/Styles';
import {  View,ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';





function Login() { 
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
          <BlurView intensity={20}>
            <View style={Styles.login}>
                  {
                    console.log('Login!!')
                  }
            </View>
          </BlurView>
      </ScrollView>
   </View>
   
  )
}

export default Login