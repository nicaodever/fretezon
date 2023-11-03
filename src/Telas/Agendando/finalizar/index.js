import React from "react";
import { StyleSheet, View , Image, Text} from "react-native"; 
import Botao from '../../../componentes/button';
import { useNavigation } from "@react-navigation/native";

export default function Final(){
    const navigation= useNavigation();
    return <>
    <View style={style.principal}> 
    <View style={{height:50,
     alignItems:"center",
     marginBottom: 120
    }}>
    <Image source={require('../../../../assets/verify.png')}/>
    <Text style={style.text}> Agendamento Concluido</Text>
    </View>
  
    <Botao onPress={() =>{
       navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
      navigation.navigate('home')}}><Text>Finalizar</Text></Botao>
    </View>
    </>  
}

const style = StyleSheet.create({
     principal:{
        width: "100%",
        height:"100%",
        backgroundColor:"white",
        justifyContent:"space-evenly",
        alignItems:"center"
     },
     text:{
        fontFamily:"RobotoBold",
        fontSize: 30,
        color:"#21CA83",
      
        marginLeft:10,
        height: 100,
        lineHeight: 30,
     }
})