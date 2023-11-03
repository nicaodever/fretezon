import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'; 
import { RFValue } from "react-native-responsive-fontsize";

 const Frete =({veiculo, hora,under,data, onPress }) => {
    return(
 <View style={style.child}>
    <View style={{flexDirection:"row", height:"100%",}}>
    <Image source={require('../../../assets/retangulo.png')} style={{marginRight:15}} /> 
    <View style={{flexDirection: "column",  height:"100%"}}>
      <View style={{width:200}}>
      <Text style={style.title} numberOfLines={1} >{veiculo}</Text>
      </View>
    
    <View style={{flexDirection:"row"}}>
    <Text style={style.details}>{data} </Text>
    <Text style={style.details}>{hora}</Text>
    </View>
    
    <Text style={style.baixo}>{under}</Text> 
    
    </View>
    </View>
    <TouchableOpacity style={style.botao}  onPress={onPress}>
     <Image source={require('../../../assets/seta.png')}/>
             </TouchableOpacity>
 </View>
    );
}

const style = StyleSheet.create({
  
    title:{
       fontFamily: "RobotoBold", 
    fontSize: RFValue(14), 
    marginBottom:"2%",
    fontWeight: 400,
    lineHeight: 20,
  
    },
    baixo:{
      fontFamily: "Roboto",
      fontSize: RFValue(12),
      lineHeight: 15,
      color: "#727272",
      marginLeft: 24,
    },
    details:{
    fontFamily: "Roboto",
    fontSize:RFValue(12),
    lineHeight: 15,
    marginRight:"2%",
    color: "#727272"
    },
    child:{
       justifyContent:"space-between",
       flexDirection: "row",
     width: "95%",
     borderBottomWidth: 1,
    borderBottomColor:"#888888",
    marginTop:"10%",
     height: 64,
    },
    botao:{
       alignItems: "center",
       justifyContent:"center",
       backgroundColor:"#21CA83",
       borderRadius: 100,
       height: 43,
       width:43
    }
 })

export default Frete;