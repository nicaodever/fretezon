import React from "react";
import { StyleSheet, View , Image, Text} from "react-native"; 
import Botao from '../../../componentes/button';
import { useNavigation } from "@react-navigation/native";

export default function Final(){
   const navigation = useNavigation();

    return <>
    <View style={style.principal}>
    <Image source={require('../../../../assets/verify.png')}/>
    <Text style={style.text}> Cadastro Concluido</Text>
    <Botao onPress={()=> {navigation.navigate('primeira')} } ><Text>Finalizar</Text></Botao>
    </View>
    </>  
}

const style = StyleSheet.create({
     principal:{
        width: "100%",
        height:"100%",
        justifyContent:"center"
     },
     text:{
        fontFamily:"RobotoBold",
        fontSize: 30,
        color:"#21CA83",
        lineHeight: 30,
     }
})