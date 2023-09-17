import React, { useEffect, useState, } from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Styles from '../styles/Results';
import {  useSelector } from 'react-redux';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import {Montserrat_600SemiBold,Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';
import CustomSwitch from '../components/customSwitch';
import VinData from '../components/VinData';

const Results = ({navigation}) => {
  const car = useSelector((state) => state.car)
  const [MainAvatar,SetAvatar] = useState('https://images2.imgbox.com/14/f8/1aFbQqtX_o.png')
  const [CarDataTab,SetCarDataTab] = useState(1)

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,Montserrat_600SemiBold,Montserrat_400Regular });
  
  const onSelectSwitch = value => {
      SetCarDataTab(value)
  } 





    useEffect(() => {
      console.log(car)
      if (!fontsLoaded && !fontError) {
        return undefined;
      }
      
       SetAvatar(car.vinDetails[4])    
       
    
    },[car,MainAvatar])

    return (

      
        
    <View style={Styles.container}>
         <View style={Styles.TopNav}>
          <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Ionicons name="arrow-back" color={'white'} size={30}  />
                </TouchableOpacity> 
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Ionicons name="ellipsis-horizontal" color={'white'} size={30}  />
                </TouchableOpacity>
    </View>
    <Text style={Styles.MainTitle}>Vin Summary</Text>
    
   <View style={Styles.TopView}>
        <View style={Styles.TopDetails}>
            <Text style={Styles.title}>{car.vinDetails[0]}</Text>
            <Text style={Styles.text}>{car.vinDetails[1]}</Text>
            <Text style={Styles.text}>{car.vinDetails[2]}</Text>
            <Text style={Styles.text}>{car.vinDetails[5]}</Text>


        </View>
        <View style={Styles.avatarView}>
         <Image
                src={MainAvatar}
                resizeMode='cover'
                style={{width:100,height:100}}
                />
   
     
        </View>
       
   </View>

    <View style={Styles.selectionMenu}>
      <CustomSwitch
        selectionMode={2}
        option1={'Tickets'}
        option2={'Vin Data'}
        option3={'Records'}
        onSelectSwitch={onSelectSwitch}/>
    </View>

    <ScrollView style={{margin:10,padding:10,top:'-15%'}}>
      {CarDataTab == 1 && <Text style={Styles.title}>Tickets</Text>}
      {CarDataTab == 2 && <VinData data={car.vinDetails}/> }
      {CarDataTab == 3 && <Text style={Styles.title}>Records</Text>}
    </ScrollView>

  


   
    
   

  
    </View>

  )
}

export default Results