import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text , Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Body(){
    const navigation = useNavigation();
    return(
        <View style={{flex:0.9, marginTop: "10%",    alignItems:"center",}}> 
    <Text style={style.txt}>Formas de pagamento</Text>
   
    < View style={style.blocos}>
    <Image  source={require('../../../../assets/cartao.png')}/>
   <Text style={style.details}>.... 1111 (Débito)</Text>
   {/* <Icon name='check' size={25} /> */}
    </View>
    < View style={style.blocos}>
    <Image  source={require('../../../../assets/money.png')}/>
   <Text style={style.details}>Dinheiro</Text>
    </View>
    <TouchableOpacity onPress={() =>{ navigation.navigate('adicionar')}}>
    <Text style={style.add}> +adicionar forma de pagamento</Text>
    </TouchableOpacity>
    
   </View>
    );
}
const style = StyleSheet.create({
    txt:{
        fontFamily:"Inter",
        fontSize:RFValue(18),
        lineHeight:19,
        marginRight:'35%',
        color:"#888888"
    },
    blocos:{
        width:'90%',
        marginLeft:"5%",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#FFFCFC",
        height:"10%",
        marginTop:"5%"
    },
    details:{
    fontFamily:"Poppins",
    fontSize: RFValue(15),
    lineHeight: 21,
    marginLeft:"5%"
    },
    add:{
        fontFamily:"Inter",
        fontSize:RFValue(15),
        lineHeight:20,
        color:"#236AF2",
        marginTop: "10%",
        textAlignVertical:"center"
    }
})



