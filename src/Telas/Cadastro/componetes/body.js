import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableHighlight,  Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Body(){
    const navigation = useNavigation();
    return <> 
    <View style={{backgroundColor:"white", height:"40%", }}>
    <Text style={style.Text}> Vamos começar</Text>
    <TouchableOpacity 
   onPress={() => {navigation.navigate('etapas') }} 
   >
    <View style={style.div}> 
      
       <View style={style.Input}>
        <Text style={style.cdd}>+55</Text>
        <View style={style.Line}/>
        <Text style={style.Number}>Insira seu número</Text>
       </View>
       <View style={{ backgroundColor:"#C5BDBD", width: "90%", height: 2, marginTop: 18}}/>
     </View>
    </TouchableOpacity>
    <TouchableOpacity>
        <View style={style.google}>
        <Image style={{width: 40, height:40, marginLeft:"8%"}} source={require('../../../../assets/icon-google.png')}/>

      <Text style={style.txtGoogle}>Entrar com o Google</Text>
        </View>
    </TouchableOpacity>
    </View>
   
    </>
}

const style = StyleSheet.create({
    google:{
   width:"90%",
   flexDirection:"row",
   marginTop: 24,
   borderRadius: 8,
   borderWidth: 1,
   borderColor:"rgba(0, 0, 0, 0.25)",
   height:58,
   backgroundColor:"#FFFFFF",
   marginLeft:"5%",
   elevation: 12,
   alignItems:"center"
   
    },
    txtGoogle:{
    marginLeft: "10%",
    fontFamily:"Inter",
     fontWeight: 500,
     fontSize: 20,
     lineHeight: 25,
    },
    div:{
        alignItems: "center",
       
    },
    Number:{
        fontSize: 24,
        lineHeight: 27.6,
       fontFamily:"Arimo",
    },
    cdd:{
        fontSize: 32,
        lineHeight: 36.8,
        marginLeft: "7%",
        fontFamily:"Arimo",
    },
    Input:{
        marginTop: 15,
        flexDirection: "row",
        fontSize: 24, 
        lineHeight: 27.5,
        alignItems: "center",
        height: 72,
        width: "90%",
        backgroundColor: "#E9E7E7",
        borderRadius: 20,
    },
   Text:{
    marginTop: 22,
    fontSize: 30,
    lineHeight: 34,
    marginLeft:"15%",
    fontFamily: "Poppins",
    fontWeight: 500,
   },
   Line:{
    height: 42,
    marginLeft:"4%",
    marginRight: "4%",
    backgroundColor: "black",
    width: 2,
   }
});