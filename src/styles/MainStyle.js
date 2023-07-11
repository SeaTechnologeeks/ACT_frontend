import styled from 'styled-components';
import {View,Text,Image} from 'react-native';
import Constants from 'expo-constants'; 



const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary:'#000000',
    secondary:'#48B6E4',
    tertiary:'#ffffff',
    darkLight:'#9CA3AF',
    white:'#D9D9D9',
    light:'#00BBF6',

};

const {primary, secondary, tertiary, darkLight, white, light} = Colors;

export const StyledContainer = styled.View`
        flex:1;
        padding:25px;
        padding-top: ${StatusBarHeight +10}px;
        background-color: ${primary};
       

`;

export const InnerContainer = styled.View`
        flex:1;
        width:100%;
        align-items:center;

`; 
export const TextContainer = styled.View`
        flex:1;
        width:100%;
        align-items:center;

`; 
export const PageLogo = styled.Image`
    width:150px;
    height:100px;
    margin:20px;

`;
export const Background = styled.Image`
flex: 1;
justifyContent: 'center';

`;

export const TitleBlue = styled.Text`
    font-size:20px;
   
    font-weight:bold;
    color:${light};
    padding:10px;
    
`;

export const Title = styled.Text`
    font-size:20px;
  
    font-weight:bold;
    color:${tertiary};
    padding:10px;
    position:relative;
`;