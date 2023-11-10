import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
   width:'100%',
    margin:10,
    padding:10,
    top:-30,
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
    alignItems: 'center',
    justifyContent: 'center',
  
},

  loadingText: {
    color: '#E1E1E1',
    fontSize:22,
    marginLeft:5,
    fontFamily:'Montserrat_400Regular',
    textAlign:'center',
  },



})

export default Styles;