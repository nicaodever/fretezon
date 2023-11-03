import React from "react";
import { View, StyleSheet   } from "react-native";

const Inicio = () =>{
    return (
        <View style={style.bar}/>
    );
};


const style = StyleSheet.create({
    bar:{
        width:"90%",
        marginLeft:"5%",
        height: 12,
        backgroundColor:"#E6E6E6",
    }
})


export default Inicio;