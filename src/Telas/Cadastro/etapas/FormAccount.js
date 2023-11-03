import React, { useState } from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";

{/*Telas */}

{/* componentes */}
import Label from "../../../componentes/Label";
import InputForms from "../../../componentes/Forms";


export default function FormAccount( {setEmail} ){
    return <>

        <View style={style.div}>

            <Label>Telefone ou email</Label>
            <InputForms
                placeholder=""
                onChangeText={texto => setEmail(texto)}
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