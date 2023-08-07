import { StyleSheet } from "react-native";





const Styles = StyleSheet.create({

main:{
    flex: 1,
    top:20,
},

Inner:{
    padding:20,
    margin:2,

},
mainView:{
    width:100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',

},
background: {
    flex: 1,
    justifyContent: 'center',
  },

  BlurView:{
    width:'90%',
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
      marginHorizontal:12 ,
    top:6,
      
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

    
    
    
  },
  vinButton:{
    width:200,
    height:40,
    borderRadius:10,
    alignItems:'center',
    justifyContent: 'center',
    borderColor:'#ffffff',
    borderWidth:1,
   margin:10,
   
   
    
  },
  

})


export default Styles; 