import React, { useEffect, useRef } from 'react'
import { Text, View,ScrollView, Image } from 'react-native'
import Styles from '../styles/VinData';
import LottieView from 'lottie-react-native';



const TicketsData = ({data}) => {
  const animation = useRef(null);
   
        
         console.log(data)
         
      
  


    return (
      <View style={Styles.container}>
       
        {(!data) ? ( 
   
    <View style={Styles.Loadingcontainer}>
             <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 100,
          height: 200,
   
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/lotties/congrats.json')}
      />
      <Text style={Styles.Loadertext}>Fetching Data...</Text>
          </View>
     
        ) : (
    <>
    <ScrollView style={Styles.container}>
    
    

    
    </ScrollView>
    </>

        )}
        </View>
  )
}



export default TicketsData