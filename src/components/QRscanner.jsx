import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Styles from '../styles/QRscanner';
import LottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadAsync } from 'expo-font';
import {Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { BarcodeValidate, VINvalidate } from '../utilities/validate';
import { RecordsFetch, TicketsFetch, vinFetch } from '../store/AsyncThunk';
import {setLoading} from '../store/loader-slice';
import { setDetails } from '../store/scan-slice';



const QRscanner = ({navigation}) => {
    const animation = useRef(null);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loader.loading);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isFlashOn, setIsFlashOn] = useState(false);
    const cameraRef = useRef(null);

    const loadFonts = async () => {
      try {
        await loadAsync({
          Montserrat_400Regular,
        });
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };
    useEffect(() => {
     
      loadFonts();
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
      const validate = (vin) => {
    
        console.log(vin)
        if(VINvalidate(vin)){
          dispatch(vinFetch(vin))
          dispatch(TicketsFetch(vin))
          dispatch(RecordsFetch(vin))
         
        
       
          
       
       
        }else {
    
          return VINvalidate(vin)
        }
    }
      
      const handleBarCodeScanned = ({ type, data }) => {
    
        dispatch(setLoading(true));
       const result = BarcodeValidate(data, type);
       if (!result.isValid) {
        alert(`Bar code is unsupported \n Please rescan`);
        dispatch(setLoading(false))
        navigation.navigate("Main");
        
       
       } else {
        
        validate(result.extractedArray[11]);
       dispatch(setDetails(result.extractedArray))
        navigation.navigate("Results")
        
    
       }
        

      };
    
      const toggleFlash = () => {
        setIsFlashOn(!isFlashOn);
      };

      const handleCameraReady = () => {
        if (isFlashOn) {
          cameraRef.current && cameraRef.current.flashMode === Camera.Constants.FlashMode.off
            ? cameraRef.current
                .setFlashMode(Camera.Constants.FlashMode.torch)
                .then(() => {})
                .catch((err) => 
                console.error('Error toggling flash:', err),
                  alert(`Error toggling flash: ${err}`)
                )
            : cameraRef.current
                .setFlashMode(Camera.Constants.FlashMode.off)
                .then(() => {})
                .catch((err) => console.error('Error toggling flash:', err),
                alert(`Error toggling flash: ${err}`));
        }
      };
  
    if (hasPermission === null) {
      return <Text>Requesting camera permission...</Text>;
    }
  
    if (hasPermission === false) {
      return 
      alert('Permission for camera is denied');
    }





  return (

    <View style={Styles.container}>
      
    {(loading || scanned) ? ( 
   
      <View style={Styles.Loadingcontainer}>
         <LottieView
    autoPlay
    ref={animation}
    style={{
      width: 100,
      height: 200,

    }}
    // Find more Lottie files at https://lottiefiles.com/featured
    source={require('../../assets/lotties/loader.json')}
  />
  <Text style={Styles.Loadertext}>Fetching Data...</Text>
      </View>
    ) : (

    <View style={Styles.Framecontainer}>
    <Camera
      style={Styles.camera}
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      flashMode={isFlashOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
      ref={cameraRef}
      onCameraReady={handleCameraReady}
    />
     <TouchableOpacity style={Styles.flashButton} onPress={toggleFlash}>
      <Text style={Styles.flashButtonText}>
        {isFlashOn ? 'Turn off Flash' : 'Turn on Flash'}
      </Text>
    </TouchableOpacity>
    <View style={Styles.centerFrame} />
   
   
  </View>
  )}
  </View>
  );
}

export default QRscanner