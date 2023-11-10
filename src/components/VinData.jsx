import React, { useEffect } from 'react'
import { Text, View,ScrollView } from 'react-native'
import Styles from '../styles/VinData';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import {Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import  Ionicons  from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'

const VinData = ({data,navigation}) => {

   const handleScrollToBottom = () => {
      scrollViewRef.current.scrollToEnd({ animated: true });
    };
  

    let [fontsLoaded, fontError] = useFonts({
        Roboto_400Regular,Montserrat_400Regular});


    useEffect(() => {
     
        if (!fontsLoaded && !fontError) {
          return undefined;
        }
        console.log(data)
        
         
         
      
      },[])
  return (
    
    <ScrollView style={Styles.container}>
     <View style={Styles.item}>
        <View style={Styles.itemDescription}>
        <FontAwesome name="tools" size={20} color="grey" />
        <Text style={Styles.itemDescriptionText}>Manufacturer:</Text>
        </View>
        <View style={Styles.itemData}><Text style={Styles.itemText}>{data[0]}</Text></View>
     </View>
     <View style={Styles.item}>
        <View style={Styles.itemDescription}>
        <Ionicons name="earth" size={20} color="grey" />
        <Text style={Styles.itemDescriptionText}>Region:</Text>
        </View>
        <View style={Styles.itemData}><Text style={Styles.itemText}>{data[2]}</Text></View>
     </View>
     <View style={Styles.item}>
        <View style={Styles.itemDescription}>
        <FontAwesome name="map-marked-alt" size={20} color="grey" />
        <Text style={Styles.itemDescriptionText}>Country:</Text>
        </View>
        <View style={Styles.itemData}><Text style={Styles.itemText}>{data[1]}</Text></View>
     </View>

    

     <View style={Styles.item}>
        <View style={Styles.itemDescription}>
        <FontAwesome name="calendar-alt" size={20} color="grey" />
        <Text style={Styles.itemDescriptionText}>Model Year:</Text>
        </View>
        <View style={Styles.itemData}><Text style={Styles.itemText}>{data[3]}</Text></View>
     </View>

     <View style={Styles.item}>
        <View style={Styles.itemDescription}>
        <AntDesign name="idcard" size={20} color="grey" />
        <Text style={Styles.itemDescriptionText}>Plant Code:</Text>
        </View>
        <View style={Styles.itemData}><Text style={Styles.itemText}>{data[6]}</Text></View>
     </View>

     <View style={Styles.item}>
        <View style={Styles.itemDescription}>
        <FontAwesome name="check-circle" size={20} color="grey" />
        <Text style={Styles.itemDescriptionText}>Check Digit:</Text>
        </View>
        <View style={Styles.itemData}><Text style={Styles.itemText}>{data[7]}</Text></View>
     </View>
    </ScrollView>
  )
}

export default VinData