import React from "react";
import { Text,StyleSheet, View,Image} from "react-native";

const LocaisRecentes = ( { children}) =>{
  return(
   <View style={style.div}> 
   <View style={style.time}>
   <Image style={style.img} source={require('../../../assets/recentes.png')}/>
   </View>
  <Text style={style.txt}> {children}</Text>
   </View>
  );
};
const style = StyleSheet.create({
       div:{
        zIndex:1,
        flexDirection:"row",
        width:"100%",
        height:60,
        marginTop: 24,
        borderBottomWidth: 1,
        borderBottomColor:"#888888",
       alignItems:"center"
       },
       time:{
        backgroundColor:"#F6F3F3", borderRadius:100, height: 40, width: 40, 
        marginRight:"5%",
        justifyContent:"center",
    },
    txt:{
        fontFamily:"Roboto",
        fontSize: 16,
        lineHeight: 20
    }
      
});

export default LocaisRecentes;