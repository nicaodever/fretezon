import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer(){
    return <>
    <View style={style.div}>
    <Image source={require('../../../../assets/wadd.jpeg')} style={style.image} />
        <Text style={style.text} > Você Avaliou Waddington </Text>
        <View name="stars" style={{flexDirection:"row"}}>
        <Icon name='star' style={{marginRight:2}}  size={18} color={"#E9ED19"}/>
        <Icon name='star' style={{marginRight:2}}  size={18} color={"#E9ED19"}/>
        <Icon name='star' style={{marginRight:2}}  size={18} color={"#E9ED19"}/>
        <Icon name='star' style={{marginRight:2}}  size={18} color={"#E9ED19"}/>
        <Icon name='star' style={{marginRight:2}}  size={18} color={"#E9ED19"}/>
        </View>
 
    </View>
    </>
}


const style = StyleSheet.create({
   div:{
    borderTopWidth: 0.6,
    width:"100%",
    backgroundColor: "white",
    flexDirection: "row",
    height:"12%",
    alignItems: "center",
    justifyContent: "space-around",
   }, 
   text:{
    fontFamily: "Roboto",
    fontSize: 12,
    lineHeight: 20,
   
   }, 
   image:{

    borderRadius: 40,
    width: "16%",
    height:"70%", 
   }

});