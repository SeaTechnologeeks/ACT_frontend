import React, { useEffect, useState } from 'react';
import { Text, View, Modal, Button, TouchableOpacity } from 'react-native';
import Styles from '../styles/DetailsCard';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import {Montserrat_600SemiBold,Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';




export const DetailsCard = ({ data }) => {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,Montserrat_600SemiBold,Montserrat_400Regular });
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  useEffect(() => {
      

    if (!fontsLoaded && !fontError) {
      return undefined;
    }
    

  
  },[])

  return (
    <View style={Styles.container}>
      {data.map((item, index) => (
           <TouchableOpacity
           key={index}
           style={Styles.cardView}
           onPress={() => handleItemPress(item)}
         >
        
          <Text style={Styles.title}><Text style={Styles.modalSubText}>Violation Type:</Text>  {item.violation_type}</Text>
          <Text style={Styles.title}><Text style={Styles.modalSubText}>Date Issued:</Text> {item.date_issued}</Text>
          <Text style={Styles.title}><Text style={Styles.modalSubText}>Charges R:</Text> {item.amount}</Text>
      
        </TouchableOpacity>
      ))}

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={Styles.modalContainer}>
          <View style={Styles.modalContent}>
            <Text style={Styles.modalHeading}>Car Ticket Details:</Text>
            <Text style={Styles.modalText}><Text style={Styles.modalSubText}>Ticket Number:</Text>  {selectedItem?.ticket_number}</Text>
            <Text style={Styles.modalText}><Text style={Styles.modalSubText}>Vin Number:</Text>  {selectedItem?.vinNumber}</Text>
            <Text style={Styles.modalText}><Text style={Styles.modalSubText}>Violation Type:</Text> {selectedItem?.violation_type}</Text>
            <Text style={Styles.modalText}><Text style={Styles.modalSubText}>Date Issued:</Text>  {selectedItem?.date_issued}</Text>
            <Text style={Styles.modalText}><Text style={Styles.modalSubText}>Amount to be paid R:</Text> {selectedItem?.amount}</Text>

            <Button
              title="Close"
              onPress={closeModal}
              style={Styles.closeButton}
              color="blue"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const DetailsCardRecords = ({ data }) => {
    console.log(data)
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={Styles.container}>
      {data.map((item, index) => (
          <TouchableOpacity
          key={index}
          style={Styles.cardView}
          onPress={() => handleItemPress(item)}
        >
          <Text style={Styles.title}><Text style={Styles.modalSubText}>Violation Type:</Text> {item.offense_type}</Text>
          <Text style={Styles.title}><Text style={Styles.modalSubText}>Description:</Text> {item.description}</Text>
          <Text style={Styles.title}><Text style={Styles.modalSubText}>Date Issued:</Text>  {item.offense_date}</Text>
       </TouchableOpacity>
      ))}

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={Styles.modalContainer}>
          <View style={Styles.modalContent}>
            <Text style={Styles.modalHeading}>Criminal Record Details:</Text>
            <Text style={Styles.modalText}><Text style={Styles.modalSubText}>Vin Number:</Text>  {selectedItem?.vinNumber}</Text>
            <Text style={Styles.modalText}><Text style={Styles.modalSubText}>Violation Type:</Text> {selectedItem?.offense_type}</Text>
            <Text style={Styles.modalText}><Text style={Styles.modalSubText}>Description:</Text>  {selectedItem?.description}</Text>
            <Text style={Styles.modalText}><Text style={Styles.modalSubText}>Date Issued:</Text>  {selectedItem?.offense_date}</Text>

            <Button
              title="Close"
              onPress={closeModal}
              style={Styles.closeButton}
              color="blue"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
