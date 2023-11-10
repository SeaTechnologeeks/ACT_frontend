import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
  
  },
  cardView:{
    borderColor:'#FF4C4C',
    borderRightWidth:1,
    borderBottomWidth:1,
    shadowColor:'#FF4C4C',
    borderRadius:15,
    boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
    width:'100%',
    padding:10,
    margin:10,
    
  },
  title:{
    color: '#E1E1E1',
    fontSize:17,
    fontWeight:'bold',
    fontFamily:'Montserrat_400Regular',
    margin:2,
    
  },
  
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