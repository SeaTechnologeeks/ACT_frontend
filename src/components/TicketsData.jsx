import React, { useEffect, useRef } from 'react'
import { Text, View,ScrollView, Image } from 'react-native'
import Styles from '../styles/TicketsData';
import LottieView from 'lottie-react-native';
import {DetailsCard} from './DetailsCard';



const TicketsData = ({data}) => {
  const animation = useRef(null);
   
        
         
      
  


    return (
      <View style={Styles.container}>
       
        {!data || data.length === 0 ? ( 
   
    <View style={Styles.Loadingcontainer}>
              <Text style={Styles.loadingText}>Congratulations...</Text>
             <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 150,
          height: 150,
   
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/lotties/congrats.json')}
      /> 
   
      <Text style={Styles.loadingText}> Your Car is Clean</Text>

          </View>
     
        ) : (
    <>
    <ScrollView style={Styles.CardContainer}>
    
    <DetailsCard data={data}/>

    
    </ScrollView>
    </>

        )}
        </View>
  )
}



export default TicketsData