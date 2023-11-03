import React from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default function Conta(){
    return <>
    <View style={{flex:1,  alignItems:"center"}}>
    <Image source={require('../../../assets/wadd.jpeg')} style={style.img} />
    <Text style={style.name}>Waddington Rendryo</Text>

    <View style={style.infos}>

    </View>
    </View>
    </>
}

const style = StyleSheet.create({
   infos:{
    backgroundColor:"#EFECEC",
   width:"90%",
   height:"30%"
   },
   img:{
    width:"40%",
    borderRadius:80,
    marginTop:"15%",
    height:"21%"
   },
   name:{
    fontFamily:"InterBold",
    marginTop:"5%",
    fontSize: RFValue(22) ,
    lineHeight:36,

   }

});