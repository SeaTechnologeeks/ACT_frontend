import React from 'react'
import { SafeAreaView, ScrollView, View,ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import TopNav from '../components/TopNav';
import Styles from '../styles/Dashoard';
import  bg from '../../assets/bg.png'
import { BlurView } from 'expo-blur';
import { Text } from 'react-native';

const Dashboard = () => {
  return (
    <ImageBackground source={bg} resizeMode='cover' style={Styles.background}>

    <SafeAreaView style={Styles.main}>
      <ScrollView style={Styles.Inner}>
       <TopNav/>
          <BlurView intensity={20} style={Styles.BlurView}>
          <View>
                    <TextInput placeholder='Enter Vin Number'  style={Styles.input}
                          
                        
                          keyboardType='email-address'
                          //onChangeText={setEmail}
                    />
                        <TouchableOpacity style={Styles.vinButton} onPress={() => navigation.navigate('welcome')}>
                    <Text style={Styles.text}>Search VIN Number</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.vinButton} onPress={() => navigation.navigate('register')}>
                    <Text style={Styles.text}>Scan VIN</Text>
                  </TouchableOpacity>
                  </View>
          </BlurView>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default Dashboard