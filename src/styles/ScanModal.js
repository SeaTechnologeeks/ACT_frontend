import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
 
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
      
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign:'left',
        fontFamily:'Montserrat_400Regular',
      },
      modalSubText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign:'left',
        fontWeight:'bold',
        fontFamily:'Montserrat_600SemiBold',
      },
      modalHeading: {
      
        fontSize:25,
        fontWeight:'bold',
        fontFamily:'Montserrat_600SemiBold',
        textAlign:'center',
        margin:10,
      },
      closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: 'center',
      },
      closeButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
      },
    

})

export default Styles;