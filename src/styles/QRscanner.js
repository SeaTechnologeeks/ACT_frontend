import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    paddingTop:50,
  },

Loadingcontainer: {


    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

      
},
    Framecontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      camera: {
        flex: 1,
        width: '100%',
      },
      centerFrame: {
        width: '80%',
        height: 350,
        borderWidth: 2,
        borderColor:'#48B6E4',
        backgroundColor: 'transparent',
        shadowColor:'##48B6E4',
        borderRadius:15,
        boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: '40%',
        left: '40%',
        transform: [{ translateX: -100 }, { translateY: -100 }],
       
      },
      ScanButton: {
        width:100,
        height:35,
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#E1E1E1',
        padding: 10,
        borderRadius: 5,
      },
      flashButton: {
        width:100,
        height:35,
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#E1E1E1',
        padding: 10,
        borderRadius: 5,
        top:'15%'
      },
      flashButtonText: {
        color: 'black',
      },
      Loadertext:{
        color: '#E1E1E1',
        fontSize:22,
   
        textAlign:'center',
        fontFamily:'Montserrat_400Regular',
        
      },

})

export default Styles;