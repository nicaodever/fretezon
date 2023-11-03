import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { RFValue } from "react-native-responsive-fontsize";
const Corridas= ( { title, subtitle, onPress}) =>{
    return (
        <View style={style.botao}
            >
            <View style={{ justifyContent:"space-between", width:"100%", flexDirection:"row"}}>
                <View style={{ marginTop:"5%", marginLeft:"2%" }}>
                <Text style={style.title}>
                   {title}
                </Text>
                <Text style={style.subtitle} >
                {subtitle}
                </Text>
            </View>
            <TouchableOpacity style={style.img} onPress={onPress} >
            <Image source={require('../../../assets/setRight.png')} />
            </TouchableOpacity>
          
            </View>
            
        </View>
    );
};
const style = StyleSheet.create({
    botao: {
        width: "94%",
        marginTop:"5%",
        flexDirection: "row",
        backgroundColor: "#FFFAFA",
        height: "10%",
       
        borderBottomWidth:1

    },
    icon:{
        padding:"4%"
    },
    title:{
        fontFamily:"InterBold",
        fontSize: RFValue(14), 
        lineHeight:24
    },
    subtitle:{
        fontFamily:"InterLight",
        fontSize: RFValue(12),

    },
    img:{
        marginRight:"5%",
        marginTop:"6%",
        

    }
})



export default Corridas ;