import { DrawerContentScrollView,DrawerItem,DrawerItemList  } from '@react-navigation/drawer'
import { BlurView } from 'expo-blur'
import React from 'react'
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { setLoading } from '../store/loader-slice'
import { setDetails } from '../store/scan-slice'
import { useDispatch } from 'react-redux'



const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const resetAllStates = () => {
    // Clear the input value when the component mounts
    dispatch(setLoading(false));
    dispatch(setDetails([]));
  }
  return (
      <BlurView  intensity={90} style={{flex:1}}>
        <DrawerContentScrollView 
        {...props}
        contentContainerStyle={{backgroundColor:'black',marginBottom:10}}>
      
      <TouchableOpacity onPress={()=>navigation.navigate('profile')}>
        <Image
            source={require('../../assets/avatar.png')}
            style={{height:100, width:100, borderRadius:40, marginTop:10, marginHorizontal:75}}/>


            <View style={{flexDirection:'row', margin:1}}>
            <Ionicons name="person-circle-outline" color={'white'} size={30}  style={{paddingHorizontal:20}} />

            <Text style={{color:'white',fontWeight:800, paddingTop:10}}>Calvin M Seabala</Text>

            </View>
            <View style={{flexDirection:'row', margin:10}}>
            <Ionicons name="people-circle-outline" color={'white'} size={30}  style={{paddingHorizontal:10}} />

            <Text style={{color:'white',fontWeight:500, marginBottom:10, paddingTop:10,paddingHorizontal:10}}>SAPS</Text>

            </View>
            </TouchableOpacity>
            <View style={{ backgroundColor:'white', padding:10, paddingTop:20}}>
            <DrawerItem
                  
                  label={'Home'}
                   onPress={() => {
              resetAllStates(); // Reset states when Home is pressed
              navigation.navigate('Main');
            }}/>
            <DrawerItem
                  
                  label={'Profile'}
                  onPress={()=>navigation.navigate('profile')}/>
                   <DrawerItem
                  
                  label={'Notifications'}
                  onPress={()=>navigation.navigate('Main')}
                  />
                   <DrawerItem
                  label={'Settings'}
                  onPress={()=>navigation.navigate('settings')}
                  >
                    
                  </DrawerItem>
            </View>
            
            
        
        </DrawerContentScrollView>
        <View style={{margin:1,padding:1}}>
        <Text style={{color:'grey', fontSize:10}} >ACT v2.0</Text>
        </View>
          <View style={{padding:5, borderTopWidth:1, borderTopColor:'#48B6E4'}}>
            <TouchableOpacity onPress={()=>{}} style={{paddingVertical:1}}>
            <View style={{flexDirection:'row', margin:1}}>
            <Ionicons name="share-social-outline" color={'black'} size={30}  style={{paddingHorizontal:20}} />

            <Text style={{color:'black',fontWeight:800, paddingTop:10}}>Tell a Friend</Text>

            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
              navigation.navigate('Auth')
            }} style={{paddingVertical:10}}>
            <View style={{flexDirection:'row', margin:1}}>
            <Ionicons name="exit-outline" color={'black'} size={30}  style={{paddingHorizontal:20}} />

            <Text style={{color:'black',fontWeight:800, paddingTop:10}}>Sign Out</Text>

            </View>
            </TouchableOpacity>

          </View>
        
     
      </BlurView>
  )
}

export default CustomDrawer