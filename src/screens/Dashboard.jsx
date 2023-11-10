import React, {  useState } from 'react'
import { SafeAreaView, View,ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import TopNav from '../components/TopNav';
import Styles from '../styles/Dashoard';
import  bg from '../../assets/bg.png'
import { BlurView } from 'expo-blur';
import { Text } from 'react-native';
import { VINvalidate } from '../utilities/validate';
import { useDispatch} from 'react-redux';
import { RecordsFetch, TicketsFetch, vinFetch } from '../store/AsyncThunk';









const Dashboard = ({navigation}) => {
  const [vin,setVin] = useState('')

  const dispatch = useDispatch();
  
 

  const validate = (vin) => {
    
    console.log(vin)
    if(VINvalidate(vin)){
      dispatch(vinFetch(vin))
      dispatch(TicketsFetch(vin))
      dispatch(RecordsFetch(vin))
    
   
      navigation.navigate("Results")
   
   
    }else {

      return VINvalidate(vin)
    }
}



  return (
    <ImageBackground source={bg} resizeMode='cover' style={Styles.background}>
    <View style={Styles.container}>
    <SafeAreaView style={Styles.main}>
      <View style={Styles.Inner}>
       <TopNav/>
          <BlurView intensity={20} style={Styles.BlurView}>
     
                    <TextInput placeholder='Enter Vin Number'  style={Styles.input}
                          
                          autoCapitalize = {"characters"}
                          keyboardType='email-address'
                          onChangeText={setVin}
                    />
                        <TouchableOpacity style={Styles.vinButton} onPress={() => validate(vin)}>
                    <Text style={Styles.text}>Decode VIN</Text>
                  </TouchableOpacity>
                  <Text style={Styles.text}>OR</Text>
                  <TouchableOpacity style={Styles.vinButton} onPress={() => navigation.navigate('register')}>
                    <Text style={Styles.text}>Scan VIN</Text>
                  </TouchableOpacity>
                  
          </BlurView>
      </View>
    </SafeAreaView>
    </View>
    </ImageBackground>
  )
}

export default Dashboard