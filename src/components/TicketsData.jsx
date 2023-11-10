import React, { useEffect } from 'react'
import { Text, View,ScrollView, Image } from 'react-native'
import Styles from '../styles/VinData';


const TicketsData = ({data}) => {

   
        
         console.log(data)
         
      
  


    return (
      <View style={Styles.container}>
       
        {(!data) ? ( 
       
       <View style={Styles.loaderContainer}>
       <Image
         source={require('../../assets/logo.png')} 
         style={Styles.loaderImage}
       />
       <Text style={Styles.loadingText}>Loading...</Text>
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