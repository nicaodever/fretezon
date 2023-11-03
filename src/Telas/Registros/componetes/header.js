import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function Header(){
    return <>
    <View style={style.div}>
    <Text style={style.text} >Registro <Text style={style.span}>de Atividades</Text></Text>
    </View>
    </>
}

const style = StyleSheet.create({
    div:{
        width: "100%",
        height:"6%",
        alignContent: "center",
        alignItems:"center",
        backgroundColor:"white",
     
        marginTop: "2%",
   
    },
    text:{
        fontSize:RFValue(22),
        marginTop: "2%",
        color:"#21CA83",
        fontFamily:"Roboto",
    },
    span:{
     color:"black",
     fontFamily:"Roboto",
    }
});