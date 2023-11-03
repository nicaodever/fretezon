import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Header(){
    return <>
    <View style={style.back} >
    <Image style={style.Image} source={require('../../../../assets/logo.png')}/>
    </View>
    </>
}

const style = StyleSheet.create({
     back:{
        backgroundColor: "#21CA83",
        width: "100%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
     },
     Image:{
        width: 350,
        height:190,
     }

});