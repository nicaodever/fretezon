import React from "react";
import { Text,StyleSheet } from "react-native";

const Label= ( { children}) =>{
  return(
    <Text style={style.Label}>{children}</Text>
  );
};
const style = StyleSheet.create({
        Label:{
            fontSize: 14,
            marginTop: 24,
            lineHeight: 18,
            fontFamily: "Poppins",
            marginBottom:16,
            color:"#888888",
             },
    
});

export default Label;