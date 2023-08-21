import React, { useEffect, } from 'react'
import { Image, View } from 'react-native'

import Styles from '../styles/Results';
import {  useSelector } from 'react-redux';



const Results = () => {
    const car = useSelector((state) => state.car)
    useEffect(() => {
        console.log(car)            
    },[car])

    return (

      
        
    <View style={Styles.container}>

        <Image
           source={{uri:'https://images2.imgbox.com/14/f8/1aFbQqtX_o.png'}}
            
                />
  
    
     
    
   

  
    </View>

  )
}

export default Results