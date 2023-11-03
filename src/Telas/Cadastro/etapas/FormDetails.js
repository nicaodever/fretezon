import React, { useState } from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";

{/*Telas */}

{/* componentes */}
import Label from "../../../componentes/Label";
import InputForms from "../../../componentes/Forms";


export default function FormDetails( {setNome, setSobrenome} ){

    
    return <>
    <View style={style.div}>
      
      
        <Label>Nome</Label>
    <InputForms
    placeholder="Nicolas"
    onChangeText={texto => setNome(texto)}  
/>    
<Label>Sobrenome</Label>
    <InputForms
    placeholder="Pimentel"

    onChangeText={texto => setSobrenome(texto)}  
/>  
</View>
    </>
}

const style = StyleSheet.create({
    div:{
        width:"100%",
        height:"50%", 
    },   
 
});