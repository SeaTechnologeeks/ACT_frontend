import { Video } from 'expo-av'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { View } from 'react-native'
import Styles from '../styles/Styles';

const VideoBackground = () => {
  return (


 
        <Video
          source={require('../../assets/splash.mp4')}
          style={Styles.backgroundVideo}
          rate={1}
          shouldPlay={true}
          isLooping={true}
          volume={0.0}
          
          resizeMode="cover"
        />

      
  )
}

export default VideoBackground;