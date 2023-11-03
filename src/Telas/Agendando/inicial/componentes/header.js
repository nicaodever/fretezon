import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Header(){
    const navigation = useNavigation();

    return (
   <View style={style.container}>

   <TouchableOpacity  onPress={() =>{
     navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
    navigation.goBack()}}>

   <View style={style.divClose}>
    <Image  style={style.close} source={require('../../../../../assets/Close.png')}/>
    </View>
   </TouchableOpacity>
   <Text style={style.text} >Agendar<Text style={style.span}> Frete</Text></Text>


   </View>
    );
}
const style = StyleSheet.create({
    container:{
        flexDirection:"row",
          padding:"5%"
    },
    divClose:{
        backgroundColor:"#21CA83" ,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent:"center",
        marginRight: "5%",
        alignItems:"center"   
    },
   close:{
   width:20,
   height:20
   },
    text:{
        fontSize: 25,
        lineHeight: 37.5,
        color:"#21CA83",
        fontFamily:"Poppins",
    },
    span:{
     color:"#000000",
     fontFamily:"Poppins",
    }
})