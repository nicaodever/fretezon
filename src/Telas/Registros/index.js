import React from "react";
import Header from "./componetes/header";
import Body from "./componetes/body";
import { View, Text } from "react-native";

export default function Registro(){
    return <>
    <View style={{backgroundColor: "white", flex:1}}>
    <Header/>
    <Body/>
    </View>
    
    </>
}