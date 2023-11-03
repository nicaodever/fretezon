import React,{useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";

import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import { pegarFretes } from "../../../servicos/firestore";

import Frete from "../../../componentes/FretesAgendados";
import { Alert } from "react-native";


export default function body(){
   const navigation = useNavigation();
   const [fretes, setFretes] = useState([]);
   const [refresh, setRefresh] = useState(false)

   async function carregarDadosFretes(){
    setRefresh(true)
    const fretesFirestore = await pegarFretes()
    setFretes(fretesFirestore)
    setRefresh(false)
}

useEffect(() => {
  carregarDadosFretes()
 }, [])

    return (
      <View style={style.container}>
      <ScrollView style={{width:"100%"}}
      refreshControl={
      <RefreshControl 
     refreshing={refresh} 
     onRefresh={carregarDadosFretes}/>  
     }>
     
     <View style={style.divPai}>
     <Frete veiculo="Manauara Shopping" hora="17 de fev. 5:55 PM " under="R$53,49"
     onPress={()=> {navigation.navigate('atividade')}}/>
      
     </View>
          </ScrollView>
      </View>
   

    );
}

const style = StyleSheet.create({
   container:{
      width: '100%',
      height:"95%",
  
      justifyContent:"center",
      alignItems:"center"
     
     },
   divPai:{
    backgroundColor:"white",
    width:"100%",
    alignItems: "center",
   
    height:"100%",
    
   },
   title:{
      fontFamily: "RobotoBold", 
   fontSize: 16, 
   fontWeight: 400,
   lineHeight: 20,
   },
   details:{
   fontFamily: "Roboto",
   fontSize: 12,
   lineHeight: 15,
   color: "#727272"
   },
   child:{
      justifyContent:"space-between",
      flexDirection: "row",
    width: "95%",
    borderBottomWidth: 1,
   borderBottomColor:"#888888",
   marginTop:"10%",
    height: 60,
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