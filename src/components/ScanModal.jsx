import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import Styles from '../styles/ScanModal'; 
import { useSelector } from 'react-redux';

const ScanModal = ({ modalVisible, closeModal }) => {
    const scanData = useSelector((state) => state.scan);


    
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={Styles.modalContainer}>
        <View style={Styles.modalContent}>
          <Text style={Styles.modalHeading}>Scan Data Details:</Text>
          
          {(!scanData || scanData.length === 0) ? (

            <>
          <Text style={Styles.modalText}>
            Use the Scan Option to obtain more information.
          </Text>
            </>
          ) : (
            <>
            
            <View>
                

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>No.:</Text> {scanData[4]} <Text style={Styles.modalSubText}>NR</Text>
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>License no:</Text> {scanData[5]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>Veh. register no:</Text> {scanData[6]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>Description:</Text> {scanData[7]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>Make:</Text> {scanData[8]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>Model:</Text> {scanData[9]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>Colour:</Text> {scanData[10]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>Vin Number:</Text> {scanData[11]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>Engine no:</Text> {scanData[12]}
                </Text>
                <Text style={Styles.modalText}> 
                <Text style={Styles.modalSubText}>Expiry Date:</Text> {scanData[13]}
                </Text>
                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>More Details:</Text> {scanData[0]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>More Details:</Text> {scanData[1]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>More Details:</Text> {scanData[2]}
                </Text>

                <Text style={Styles.modalText}>
                <Text style={Styles.modalSubText}>More Details:</Text> {scanData[3]}
                </Text>
                
               
            </View>
            </>
          )

          }

          <Button
            title="Close"
            onPress={closeModal}
            style={Styles.closeButton}
            color="blue"
          />
        </View>
      </View>
    </Modal>
  );
};

export default ScanModal;
