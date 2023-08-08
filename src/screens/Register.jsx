import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles/Register';
import bg from '../../assets/bg.png'
import { BlurView } from 'expo-blur';
import logo from '../../assets/logo.png'
import Google from '../../assets/google.png';
import Apple from '../../assets/apple.png';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useNavigation } from '@react-navigation/native';





const Register = () => {
  const navigation = useNavigation();
    const [isHighlighted, setIsHighlighted] = useState(false);
    
    const [isActive, setIsActive] = useState(false);
    const login = () => {
        
         
        
    }

    const SignUpWithApple = async() => {
      try {
        const credential = await AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
        });
        // signed in
        console.log(credential)
        navigation.navigate('Dashboard', {screen:'Home'});
      } catch (e) {
        if (e.code === 'ERR_REQUEST_CANCELED') {
          // handle that the user canceled the sign-in flow
        } else {
          // handle other errors
        }
      }
     
    }
    const SignUpWithGoogle = async() => {

   
    }
  return (
    <ImageBackground source={bg} resizeMode='cover' style={styles.background}>
     
             <View style ={styles.container}>
                <View style ={styles.main}>
                    <ScrollView contentContainerStyle={{
                         flex:1,
                         width: '100%',
                         height: '100%',
                         alignItems: 'center',
                          justifyContent: 'center',
                             }}>
                                   
                                
                                <BlurView intensity={20} style={styles.formView}>
                                <Image source={logo}  style={styles.logo} />
                  
                  <View>
                    <Text style={styles.text}   
                  >Name</Text>
                    <TextInput placeholder='Name'  style={[styles.input, isHighlighted && styles.active]}
                          
                          onFocus={() => { setIsHighlighted(true)}}
                          onBlur={() => {setIsHighlighted(false)}}
                          keyboardType='email-address'
                          
                    />
                    
                  </View>


                  <View>
                    <Text style={styles.text}>Surname</Text>
                    <TextInput placeholder='Surname'  style={[styles.input, isActive && styles.active]}
                      
                          onFocus={() => { setIsActive(true)}}
                          onBlur={() => {setIsActive(false)}}/>
                    
                  </View>
                  <View>
                    <Text style={styles.text}>Phone Number</Text>
                    <TextInput placeholder='+2768 000-0000' keyboardType='phone-pad'  style={[styles.input, isActive && styles.active]}
                      
                          onFocus={() => { setIsActive(true)}}
                          onBlur={() => {setIsActive(false)}}/>
                    
                  </View>

                  <View>
                    <Text style={styles.text}>Email</Text>
                    <TextInput placeholder='Email'  style={[styles.input, isActive && styles.active]}
                        keyboardType='email-address'
                          onFocus={() => { setIsActive(true)}}
                          onBlur={() => {setIsActive(false)}}/>
                    
                  </View>


                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('welcome')} >
                    <Text style={styles.Btntext}  
                     >Register</Text>
                  </TouchableOpacity>
                  <View >
                  <Text style={styles.text}>Continue with...</Text>
                  </View>
                             <View style={styles.social}>

                  <TouchableOpacity style={styles.socialIcon} onPress={SignUpWithApple}>
                    <Image source={Apple} style={{top:8}}/>
                  </TouchableOpacity>

                  <View style={styles.socialTextView}>
                  <Text style={styles.text}>OR</Text>
                  </View>
                  <TouchableOpacity style={styles.socialIcon} onPress={SignUpWithGoogle}>
                    <Image source={Google}  style={{top:10}} />
                  </TouchableOpacity>
                             </View>
                 

                                </BlurView>



        

                    </ScrollView>
                </View>
            </View>
    </ImageBackground>
  
  )
}

export default Register