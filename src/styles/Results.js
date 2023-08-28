import { StyleSheet } from "react-native"



const Styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
     
        paddingTop:50,
        
        
       
        
      },
      TopNav:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignContent:'space-between',
        padding:10,
        margin:10,
        
       
      },
      TopView: {
       
        borderColor:'#48B6E4',
        borderRightWidth:1,
        borderBottomWidth:1,
        shadowColor:'##48B6E4',
        borderRadius:15,
        boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
        width:'90%',
        padding:10,
        margin:10,
        flexDirection:'row',
        justifyContent:'space-evenly',
        
      },
      avatarView:{
       padding:15,
       margin:15,
      },
      TopDetails:{
        padding:15,
       margin:15,
     

      },
      MainTitle:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:'25%',
        color:'white',
        fontSize:35,
        fontWeight:'bold',
        fontFamily:'Montserrat_600SemiBold',
      },
      title:{
        color:'white',
        fontSize:35,
        fontWeight:'bold',
        fontFamily:'Montserrat_600SemiBold',
      },
      text:{
        color:'white',
        fontSize:22,
        marginTop:5,
        fontFamily:'Roboto_400Regular',
        
      },
      selectionMenu: {
        backgroundColor:'#000000'
      }


})

export default Styles