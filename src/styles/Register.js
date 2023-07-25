
import {StyleSheet} from 'react-native';








const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent:'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        
      },

      main:{
      
        shadowColor:'#FFFFFF',
        borderRadius:15,
        boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
        padding:10,
        alignItems: 'center',
        bottom:0,
        
    },
    
    logo:{

      width:100,
      height:100,
      borderColor:'#FFFFFF',
      borderWidth:2,
      borderRadius:50,
      marginTop:10,
      resizeMode:'cover',
      marginBottom:10,
      
    

    },
    input: {
      width:290,
      height:40,
      padding:0,
      backgroundColor: '#292929',
      borderWidth:2,
      borderRadius: 16,
      marginVertical:10,
      color: '#FFFFFF',
      borderColor:'#48B6E4',
      
      
      
    },
    active:{
      backgroundColor: '#ffffff',
      color:'#000000'
    },
  
    text:{
        fontSize:20,
        fontWeight:'400',
        color:'#ffffff',
        marginHorizontal:5,
      top:6,
        
    },
    
    Btntext:{
        fontSize:20,
        fontWeight:'400',
        color:'#ffffff',
        marginHorizontal:5,
  
        
    },
    button:{
      width:150,
      height:35,
      borderRadius:10,
      alignItems:'center',
      marginVertical:10,
      borderColor:'#ffffff',
      borderWidth:1,
     margin:5,
      padding:5,
      
    },
    background: {
        flex: 1,
        justifyContent: 'center',
      },

      formView:{
        width:350,
       
        shadowColor:'#FFFFFF',
        borderRadius:15,
        boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
        padding:10,
        alignItems: 'center',
        bottom:0,
        margin:5,
        
    },

    social:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin:5,
        padding:5,
    },
    socialIcon: {
        width:50,
        height:50,
        top:15,
        alignItems: 'center',
        borderColor:'#48B6E4',
        borderWidth:1,
        borderRadius:90,
    },
    socialTextView:{
            margin:1,
            padding:5,
    },

});
export default Styles;