import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./componentes/header";
import Body from "./componentes/body";

export default function Pedido(){
    
    return <>
    <View style={{flex:1 , backgroundColor:"white"}}>
        
    <Header/>
    <Body/>
    </View>
    
    </>
}