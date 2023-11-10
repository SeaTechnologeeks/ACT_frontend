import React, { useEffect, useRef } from 'react'
import { Text, View,ScrollView} from 'react-native'
import Styles from '../styles/RecordsData';
import LottieView from 'lottie-react-native';
import { DetailsCardRecords } from './DetailsCard';





const RecordsData = ({data}) => {
    const animation = useRef(null);
   
        
 console.log(data)
    
 



return (
 <View style={Styles.container}>
  
   {!data || data.length === 0  ? ( 

<View style={Styles.Loadingcontainer}>
    {
           console.log(data)
    }
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

 <Text style={Styles.loadingText}>No Criminal Records Found</Text>

     </View>

   ) : (
<>
<ScrollView>


<DetailsCardRecords data={data}/>

</ScrollView>
</>

   )}
   </View>
)
}

export default RecordsData