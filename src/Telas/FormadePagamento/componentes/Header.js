import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function Header(){
    const navigation = useNavigation();
    return <>
    <View style={{ flex: 0.2, backgroundColor:"white"    }}>
         
   <TouchableOpacity style={style.divClose}  onPress={() =>{ navigation.goBack()}}>
   
    <Image  style={style.close} source={require('../../../../assets/Close.png')}/>
   
   </TouchableOpacity>
    <Text style={style.title}>Opções de Pagamento</Text>
    </View>
    </>
}

const style = StyleSheet.create({
    divClose:{
        backgroundColor:"#21CA83" ,
        width: 40,
        height: 40,
        margin: "5%",
        borderRadius: 40,
        justifyContent:"center",
        alignItems:"center"   
    },
   close:{
   width:20,
   height:20
   },
   title:{
  fontFamily:"Poppins",
   fontSize: RFValue(23) ,
   lineHeight:33,
   marginLeft:"10%"
   }
})