import React, { useEffect, useRef, useState, } from 'react'
import { ActivityIndicator, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Styles from '../styles/Results';
import { useDispatch, useSelector } from 'react-redux';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import {Montserrat_600SemiBold,Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { loadAsync } from 'expo-font';
import CustomSwitch from '../components/customSwitch';
import VinData from '../components/VinData';
import TicketsData from '../components/TicketsData';
import LottieView from 'lottie-react-native';
import RecordsData from '../components/RecordsData';
import {setLoading} from '../store/loader-slice';
import ScanModal from '../components/ScanModal';





const Results = ({navigation}) => {
  const animation = useRef(null);
  const dispatch = useDispatch();
  const car = useSelector((state) => state.car)
  const [MainAvatar,SetAvatar] = useState('https://images2.imgbox.com/14/f8/1aFbQqtX_o.png')
  const [CarDataTab,SetCarDataTab] = useState(1)
  const loading = useSelector((state) => state.loader.loading);
  const scanData = useSelector((state) => state.scan);
  const [modalVisible, setModalVisible] = useState(false);

  

  const loadFonts = async () => {
    try {
      await loadAsync({
        Roboto_400Regular,
        Montserrat_600SemiBold,
        Montserrat_400Regular,
      });
    } catch (error) {
      console.error('Error loading fonts:', error);
    }
  };
  
  const onSelectSwitch = value => {
      SetCarDataTab(value)
  } 
  

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


    useEffect(() => {
      
      loadFonts();
      if (car && car.vinDetails) {
        SetAvatar(car.vinDetails[4]);
        dispatch(setLoading(false));
      }

    
    },[car,MainAvatar])



    return (
      <View style={Styles.container}>
      
        {(loading || !car.vinDetails) ? ( 
       
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
          <>
            <View style={Styles.TopNav}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Ionicons name="arrow-back" color={'white'} size={30}  />
                </TouchableOpacity> 
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Ionicons name="ellipsis-horizontal" color={'white'} size={30}  />
                </TouchableOpacity>
            </View>
            <Text style={Styles.MainTitle}>Vin Summary</Text>
    
            <TouchableOpacity style={Styles.TopView} onPress={openModal}>
        <View style={Styles.TopDetails}>
            <Text style={Styles.title}>{car.vinDetails[0]}</Text>
            <Text style={Styles.text}>{car.vinDetails[1]}</Text>
            <Text style={Styles.text}>{car.vinDetails[2]}</Text>
            <Text style={Styles.text}>{car.vinDetails[5]}</Text>


        </View>
        <View style={Styles.avatarView}>
         <Image
                src={MainAvatar}
                resizeMode='cover'
                style={{width:100,height:100}}
                />
   
     
        </View>
       
   </TouchableOpacity>

    <View style={Styles.selectionMenu}>
      <CustomSwitch
        selectionMode={1}
        option1={'Tickets'}
        option2={'Vin Data'}
        option3={'Records'}
        onSelectSwitch={onSelectSwitch}/>
    </View>

    <ScrollView style={{margin:10,padding:10,top:'-15%'}}>
      {CarDataTab == 1 && <TicketsData data={car.tickets}/>}
      {CarDataTab == 2 && <VinData data={car.vinDetails}/> }
      {CarDataTab == 3 && <RecordsData data={car.criminalRecords}/>}
    </ScrollView>

          </>
        )}
        <ScanModal
           modalVisible={modalVisible}
           closeModal={closeModal}
              
          />
      </View>
    );
    

  
}

export default Results