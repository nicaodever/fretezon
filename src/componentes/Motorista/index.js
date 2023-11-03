import React from "react";
import { Text,StyleSheet, View,Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/FontAwesome';

const Motorista = ( {avaliação, nome} ) =>{
  return(
   <View style={style.container} > 
   <Text style={style.avaliacao}>{avaliação} </Text>
   <Icon name='star' size={18} color={"black"} style={{marginLeft:"2%"}} />
   <Text style={style.nome}> {nome}</Text>
   </View>
  );
};
const style = StyleSheet.create({
    container:{
        marginTop:"2%",
        alignSelf: 'flex-start',
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#E5E0E0",
        borderRadius:18
    },
    avaliacao:{
        fontFamily:"Inter",
        fontSize:RFValue(14),
       marginLeft:"2%"
    },
    nome:{
        fontFamily:"Inter",
        color:"#21CA83",
        fontSize:RFValue(14),
        marginRight:"2%"
    }
      
});

export default Motorista;