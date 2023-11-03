import React from "react";
import { View } from "react-native";
import Header from './componentes/Header';
import Body from "./componentes/Body";

export default function FormadePagamento(){
    return <>
    <View style={{flex:1, backgroundColor:"white"}}>
        <Header/>
        <Body/>
      
    </View>
    </>
}