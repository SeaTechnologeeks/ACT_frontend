
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
       width:'100%',
        margin:10,
        padding:10,
        top:-30,
      },
      title:{
        color:'white',
        fontSize:35,
        fontFamily:'Roboto_400Regular',
      },
      item:{
        width:'100%',
        margin:10,
        display: 'flex',
        flexDirection: 'row',
      },
      itemDescription:{
        width:'50%',
       
        display: 'flex',
        flexDirection: 'row',
      },
      itemDescriptionText:{
        color:'grey',
        fontSize:20,
        paddingLeft:5,
        fontFamily:'Montserrat_400Regular',
      },
      itemData:{
      
      },
      itemText:{
        color:'grey',
        fontSize:20,
        marginLeft:5,
        fontFamily:'Montserrat_400Regular',
      }



})

export default Styles;