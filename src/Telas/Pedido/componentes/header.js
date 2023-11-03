import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export default function Header(){
    return <>
    <View style={style.div}>
    <Text style={style.text} >Fretes<Text style={style.span}> Agendandos</Text></Text>
    </View>
    </>
}

const style = StyleSheet.create({
    div:{
        width: "100%",
        alignContent: "center",
        height:"6%",
        alignItems:"center",
        backgroundColor:"white",
        marginTop: "2%",
    
    
     
    },
    text:{
        fontSize:RFValue(22),
        marginTop: "2%",
        color:"black",
        fontFamily:"Poppins",
    },
    span:{
     color:"#21CA83",
     fontFamily:"Poppins",
    }
});