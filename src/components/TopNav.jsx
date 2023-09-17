import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import avatar from '../../assets/avatar.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const TopNav = () => {
  const navigation = useNavigation();
  return (
    <View style={{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignContent:'space-between',
        marginBottom:20,
        top:25,
    }}>
       
        <Text style={{fontSize:20, fontWeight:'900',color:'white',justifyContent:'flex-start'}}>Anti-Car Theft</Text>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <ImageBackground
                source={avatar}
                style={{width:45,height:45}}
                imageStyle={{borderRadius:25}}/>
                </TouchableOpacity>
    </View>
  )
}

export default TopNav