import React,{useEffect, useState} from "react";
import Botao from '../../../componentes/button';
import { useNavigation } from "@react-navigation/native";
import {StyleSheet, View, ScrollView, RefreshControl, Text, TouchableOpacity} from 'react-native';
import { pegarFretes, AtualizarProdutos, fretesTempoReal } from "../../../servicos/firestore";
import Frete from "../../../componentes/FretesAgendados";


export default function Body({ frete }){
   

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
  fretesTempoReal(setFretes)
 }, [])

 
    return <>
    <View style={style.container}>
    <ScrollView style={{width:"100%"}}
    refreshControl={
    <RefreshControl 
   onRefresh={carregarDadosFretes}/>  
   }>
   <View style={style.divPai}>
   {
          fretes?.map((frete) =>{
            return(
                <Frete veiculo={frete.origem} hora={frete.hora} data={frete.data}
            under="Carga"
            onPress={() => navigation.navigate('crud', frete)}  key={frete.id}
            
           />
           
            )
          })
        }
   </View>
        </ScrollView>
    </View>
    </>
}
const style = StyleSheet.create({
   container:{
    width: '100%',
    height:"95%",

    justifyContent:"center",
    alignItems:"center"
   
   },
   txt:{
      fontFamily:"RobotoBold",
      color:"#21CA83",
     marginVertical:100,
      width:"60%",
      fontSize: 25,
      lineHeight: 30
   },
   divPai:{
   
      width:"100%",
      alignItems: "center",
      height:"100%",
     
     },
   

})