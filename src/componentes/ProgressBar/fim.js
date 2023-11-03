import React from "react";
import { View, StyleSheet   } from "react-native";

const Fim = () =>{
    return (
       <View style={{flexDirection:"row"}}>
         <View style={style.green}/>
         <View style={style.bar}/>
       </View>
        
    );
};


const style = StyleSheet.create({
    
    bar:{ 
        width:"30%",
        height: 12,
        backgroundColor:"#E6E6E6",
    },
    green:{
        width:"60%",
        marginLeft:"5%",
        height: 12,
        backgroundColor:"#21CA83",
    }
})


export default Fim;