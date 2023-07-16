
import {StyleSheet} from 'react-native';








const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent:'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
      },
   
      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
       
      },

      login:{
          width:310,
          borderColor:'#FFFFFF',
          borderLeftWidth:1,
          borderBottomWidth:1,
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
        marginBottom:50,
      

      },
      input: {
        width:270,
        height:40,
        padding:10,
        backgroundColor: '#292929',
        borderWidth:2,
        borderRadius: 16,
        marginVertical:10,
        color: '#FFFFFF',
        borderColor:'#48B6E4',
        marginBottom:20,
        
        
      },
      active:{
        backgroundColor: '#ffffff',
        color:'#000000'
      },
    
      text:{
          fontSize:20,
          fontWeight:'400',
          color:'#ffffff',
          marginHorizontal:10,
      },
      

      button:{
        width:200,
        height:35,
        borderRadius:10,
        alignItems:'center',
        marginVertical:10,
        borderColor:'#ffffff',
        borderWidth:1,
       margin:5,
        padding:5,
        
      },
      GuestButton: {
        width:200,
        height:35,
        borderRadius:10,
        alignItems:'center',
        marginVertical:10,
        margin:5,
        padding:5,

      },
   
});

export default Styles;