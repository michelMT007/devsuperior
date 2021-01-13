import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

 function Header(){

    return(

        <View style={style.container}>
            <Image source= {require('../assets/logo.png')}/>
            <Text style={style.text}>DS Delivery</Text>
            <StatusBar></StatusBar>
        </View>
    )
 }
 const style = StyleSheet.create({
     container:{
        backgroundColor:'#DA5C5C',
        height: 90,
        paddingTop:50, /**espaçamento em cima*/
        flexDirection: 'row',/*coloca os elementos em linha*/
        justifyContent:'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize:18,
        lineHeight:25,
        letterrSpacing: -0.24,
        color: '#FFF',
        marginLeft: 15  /** */         

    }
 })

 export default Header;