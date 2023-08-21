import { Alert } from "react-native";









 export const VINvalidate = (vin) => {

    try {
        // Remove any spaces or dashes from the VIN
        const cleanVIN = vin.replace(/[\s\-]/g, '');
    
        // Check if the cleaned VIN is 17 characters long
        if (cleanVIN.length !== 17) {
          throw new Error('VIN must be exactly 17 characters long');
        }
    
        // Check if the VIN contains only valid characters (letters and digits)
        if (!/^[A-HJ-NPR-Z0-9]+$/.test(cleanVIN)) {
          throw new Error('VIN contains invalid characters');
        }
    
       
    
        // Add more checks for specific positions if needed
    
        // If all checks pass, the VIN is valid
           return (true);
      } catch (error) {
        console.error('VIN validation error:', error.message);
       return  Alert.alert(error.message,'', [
      
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      
      }
  }