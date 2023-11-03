import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Botao= ( { children, onPress}) =>{
  return(
    <TouchableOpacity style={style.botao} 
    onPress={onPress}>
        <Text style={style.text}>{children}</Text>
         </TouchableOpacity> 
  );
};
const style = StyleSheet.create({
    botao:{
        backgroundColor :"#21CA83",
        height: 60,
        alignItems:"center",
        borderRadius: 32,
        width: 260,
    },
             text:{
                color:"white",
                marginTop:20,
                 fontSize: 18,
                  lineHeight: 20, 
                  fontFamily:"Inter" 
             }
    
});

export default Botao;