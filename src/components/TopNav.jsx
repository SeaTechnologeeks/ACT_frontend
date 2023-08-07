import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import avatar from '../../assets/avatar.png';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Profile = () => {
   navigation.navigate('login')
}
const TopNav = ({navigation}) => {

  return (
    <View style={{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom:20,
    }}>
       
        <Text style={{fontSize:20, fontWeight:'900',color:'white'}}>Anti-Car Theft</Text>
        <TouchableOpacity onPress={Profile}>
        <ImageBackground
                source={avatar}
                style={{width:45,height:45}}
                imageStyle={{borderRadius:25}}/>
                </TouchableOpacity>
    </View>
  )
}

export default TopNav