import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from '../styles/Results';
const CustomSwitch = ({selectionMode,option1,option2,option3, onSelectSwitch}) => {
    const [getSelectedMode,setSelectedMode] = useState(selectionMode);

    const updateSwitchData = value => {
        setSelectedMode(value);
        onSelectSwitch(value);
    }
  return (
    <View style={{
        height:50,
        width:'80%',
        backgroundColor:'#000000',
        borderRadius:10,
        borderColor:'#AD4BAF',
        boxShadow:'0 4px 30px rgba(0, 0, 0, 0.5)',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }}>
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(1)}
            style={{
                flex: 1,
                backgroundColor: '#000000',
                borderColor:getSelectedMode == 1 ? '#48B6E4': '#000000',
                borderWidth:2,
                borderRadius:90,
                justifyContent: 'center',
                alignItems: 'center',
                padding:5,
                margin:1,

            }}>
            <Text style={Styles.text}>Tickets</Text>

        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(2)}
            style={{
                flex: 1,
                backgroundColor: '#000000',
                borderColor:getSelectedMode == 2 ? '#48B6E4': '#000000',
                borderWidth:2,
                borderRadius:90,
                justifyContent: 'center',
                alignItems: 'center',
                padding:5,
                margin:1,


            }}>
            <Text style={Styles.text}>Vin Data</Text>

        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(3)}
            style={{
                flex: 1,
                backgroundColor: '#000000',
                borderColor:getSelectedMode == 3 ? '#48B6E4': '#000000',
                borderWidth:2,
                borderRadius:90,
                justifyContent: 'center',
                alignItems: 'center',
                padding:5,
                margin:1,


            }}>
            <Text style={Styles.text}>Records</Text>

        </TouchableOpacity>
    </View>
  )
}

export default CustomSwitch