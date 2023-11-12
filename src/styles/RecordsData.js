import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
   width:'100%',
    margin:1,
    padding:1,
    top:-10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  loaderContainer: {
    flex: 1,    
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
      alignContent:"center",
      justifyContent:"center",
  },
  Loadingcontainer: {
    display:'flex', 
    alignItems: 'center',
    justifyContent: 'center',
  
},

  loadingText: {
    
    color: '#E1E1E1',
    fontSize:22,
    margin:5,
    fontFamily:'Montserrat_400Regular',
    
  },
  CardContainer:{
   
    flex: 1,
   width:'100%',
    margin:10,
    padding:10,
   
},



})

export default Styles;