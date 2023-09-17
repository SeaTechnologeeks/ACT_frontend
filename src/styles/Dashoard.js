import { StyleSheet } from "react-native";





const Styles = StyleSheet.create({

main:{
    flex:1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
},

Inner:{
  width: '100%',
  height: '100%',
    padding:20,
    margin:2,

},
mainView:{
  width: '100%',
  height: '100%',
    alignItems: 'center',
    justifyContent: 'center',

},
background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent:'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  BlurView:{
    width: '100%',
   
    shadowColor:'#FFFFFF',
    borderRadius:15,
    boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
    padding:1,
    alignItems: 'center',
    justifyContent:'center',
    bottom:0,
    top:90,
    margin:5,
    
},


  text:{
    fontSize:20,
    fontWeight:'400',
    color:'#ffffff',
    top:10,
    textAlign:'center',
      
  },

  input: {
    width:290,
    height:40,
    padding:10,
    borderWidth:2,
    borderRadius: 16,
    marginVertical:10,
    backgroundColor: '#ffffff',
    color:'#000000',
    borderColor:'#48B6E4',
  textAlign: 'center',
  },
  vinButton:{
    width:180,
    height:40,
    borderRadius:10,
    textAlign: 'center',
    borderColor:'#ffffff',
    borderWidth:1,
   margin:20,
   backgroundColor:'#48B6E4',
   
   
    
  },
  

})


export default Styles; 