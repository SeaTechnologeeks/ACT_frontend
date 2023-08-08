import React, { useState } from 'react';
import Styles from '../styles/Styles';
import { ImageBackground, View,ScrollView, Image, Text,TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux';
import bg from '../../assets/bg.png'





export default function Login({navigation}) { 
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [email,setEmail] = useState(useSelector((state) => state.user.userDetails));
  const [password,setPassword] = useState('');
  const [isActive, setIsActive] = useState(useSelector((state) => state.user.isAuthenticated));
  const Login =async()=>{
    navigation.navigate('Dashboard', {screen:'Home'});
  }

  return (
    <ImageBackground source={bg} resizeMode='cover' style={Styles.background}>
   <View style={Styles.container}>
      

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
                    <TextInput placeholder='Email Address'  style={[Styles.input, isHighlighted && Styles.active]}
                          
                          onFocus={() => { setIsHighlighted(true)}}
                          onBlur={() => {setIsHighlighted(false)}}
                          keyboardType='email-address'
                          onChangeText={setEmail}
                    />
                    
                  </View>
                  <View>
                    <Text style={Styles.text}>Password</Text>
                    <TextInput placeholder='Password' secureTextEntry={true} style={[Styles.input, isActive && Styles.active]}
                        onChangeText={setPassword}
                          onFocus={() => { setIsActive(true)}}
                          onBlur={() => {setIsActive(false)}}/>
                    
                  </View>
                  <TouchableOpacity style={Styles.button} onPress={Login}>
                    <Text style={Styles.text}  
                     >Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('welcome')}>
                    <Text style={Styles.text}>Forgot Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.GuestButton} onPress={() => navigation.navigate('register')}>
                    <Text style={Styles.text}>Create Acoount</Text>
                  </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          </BlurView>
      </ScrollView>
      
   </View>
   </ImageBackground>
  )
}

