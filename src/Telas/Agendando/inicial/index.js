import React, {useEffect} from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text} from "react-native";
import Header from "./componentes/header";
import Body from "./componentes/body";

export default function Inicial({navigation}){
  
  useEffect(() => {
    navigation.getParent().setOptions({tabBarStyle:{ display: 'none'} });
    const comeback = navigation.addListener('beforeRemove', e => {
       navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
       return true;
    })
    return comeback; 
   }, [navigation])
  
    return (
   <View style={style.container}>
  <Header/>
  <Body/>
   </View>
    );
}
const style = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white",

      
    },
    
})