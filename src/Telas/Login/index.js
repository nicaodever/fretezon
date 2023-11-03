import React from "react";
import {View, StyleSheet , Text} from "react-native";
import Main from './componentes/main';
import { ScrollView } from "react-native-gesture-handler";


export default function Login(){
    return <>
    <View style={style.div}>
        <Main/>
    
    </View>
    </>
}

const style = StyleSheet.create({
    div:{
        flex:1,
        backgroundColor:"white"
    }
})