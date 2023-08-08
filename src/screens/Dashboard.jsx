import React from 'react'
import { SafeAreaView, ScrollView, View,ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import TopNav from '../components/TopNav';
import Styles from '../styles/Dashoard';
import  bg from '../../assets/bg.png'
import { BlurView } from 'expo-blur';
import { Text } from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <ImageBackground source={bg} resizeMode='cover' style={Styles.background}>
    <View style={Styles.container}>
    <SafeAreaView style={Styles.main}>
      <ScrollView style={Styles.Inner}>
       <TopNav/>
          <BlurView intensity={20} style={Styles.BlurView}>
     
                    <TextInput placeholder='Enter Vin Number'  style={Styles.input}
                          
                        
                          keyboardType='email-address'
                          //onChangeText={setEmail}
                    />
                        <TouchableOpacity style={Styles.vinButton} onPress={() => navigation.navigate('welcome')}>
                    <Text style={Styles.text}>Decode VIN Number</Text>
                  </TouchableOpacity>
                  <Text style={Styles.text}>OR</Text>
                  <TouchableOpacity style={Styles.vinButton} onPress={() => navigation.navigate('register')}>
                    <Text style={Styles.text}>Scan VIN</Text>
                  </TouchableOpacity>
                  
          </BlurView>
      </ScrollView>
    </SafeAreaView>
    </View>
    </ImageBackground>
  )
}

export default Dashboard