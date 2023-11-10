import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Styles from '../styles/QRscanner';





const QRscanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isFlashOn, setIsFlashOn] = useState(false);
    const cameraRef = useRef(null);

  
    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
                .catch((err) => console.error('Error toggling flash:', err))
            : cameraRef.current
                .setFlashMode(Camera.Constants.FlashMode.off)
                .then(() => {})
                .catch((err) => console.error('Error toggling flash:', err));
        }
      };
  
    if (hasPermission === null) {
      return <Text>Requesting camera permission...</Text>;
    }
  
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  return (
    <View style={Styles.container}>
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
   
    {scanned && (
      <Button style={Styles.ScanButton} title="Scan Again" onPress={() => setScanned(false)} />
    )}
  </View>
  )
}

export default QRscanner