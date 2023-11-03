import React, { useState } from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";


{/*Telas */}

{/* componentes */}
import Label from "../../../componentes/Label";
import InputForms from "../../../componentes/Forms";


export default function FormPassword( {setSenha, setConfirmar} ){
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });

   
    return <>
    <View style={style.div}>
        <Label>Senha</Label>
    <InputForms
    placeholder="••••••"
    secureTextEntry={true}
    onChangeText={texto => setSenha(texto)}  
/>    
<Label>Confirmar senha</Label>
    <InputForms
    placeholder="••••••"
    secureTextEntry={true}
    onChangeText={texto => setConfirmar(texto)}  
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