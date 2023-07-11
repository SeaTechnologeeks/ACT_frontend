import React, { useState } from 'react';
import VideoBackground from '../components/Video';
import Styles from '../styles/Styles';
import {  View,ScrollView, Image, Text,TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import logo from '../../assets/logo.png'






function Login() { 
  const [isHighlighted, setIsHighlighted] = useState(false)
  const [isActive, setIsActive] = useState(false)

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
          <KeyboardAvoidingView>
          <View style={Styles.login}>
                  <Image source={logo}  style={Styles.logo} />
                  <View>
                    <Text style={Styles.text}   
                  >Username</Text>
                    <TextInput   style={[Styles.input, isHighlighted && Styles.active]}
                          onFocus={() => { setIsHighlighted(true)}}
                          onBlur={() => {setIsHighlighted(false)}}
                          keyboardType='email-address'
                    />
                    
                  </View>
                  <View>
                    <Text style={Styles.text}>Password</Text>
                    <TextInput placeholder='Password' secureTextEntry={true} style={[Styles.input, isActive && Styles.active]}
                          onFocus={() => { setIsActive(true)}}
                          onBlur={() => {setIsActive(false)}}/>
                    
                  </View>
                  <TouchableOpacity style={Styles.button}>
                    <Text style={Styles.text}  
                     >Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.button}>
                    <Text style={Styles.text}>Forgot Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.GuestButton}>
                    <Text style={Styles.text}>Continue as Guest</Text>
                  </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          </BlurView>
      </ScrollView>
   </View>
   
  )
}

export default Login