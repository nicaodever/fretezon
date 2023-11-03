import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header(){
  const navigation = useNavigation();

    return <>
    <View style={style.div}>
    <View style={{flexDirection: "row", 
            }}>
            <TouchableOpacity style={{ marginTop: "7%", marginLeft: "4%", width: 20}} 
            onPress={() =>{ 
              navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
            navigation.goBack();  }}
            >
    <Image source={require('../../../../assets/setagreen.png')}   style={{width: 15, height:21,}}/>
     </TouchableOpacity> 
     <Text style={style.text}>Detalhes do Frete</Text>
             </View>
  
             <View style={style.child}>
               <View style={{flexDirection:"row"}}>
               <Image source={require('../../../../assets/retangulo.png')}
          style={{
           marginRight: "5%",
          }}
          /> 
             <View style={{flexDirection: "column", 
            }}>
             <Text style={style.title}>
                Av.Jurunas
               </Text>
               <Text style={style.details}>
                17 de fev 5:55PM
               </Text>
               
             </View>
             <View style={{marginLeft:"40%"}}>
             <Text style={style.details}>
                R$ 53,40
               </Text>
             </View>
             
               </View>
            </View>
    </View>
    </>
}

const style = StyleSheet.create({
   div:{
    flexDirection: "column",
    width: "100%",
    height: "18%",
    backgroundColor: "white", 

   }, 
   text:{
    marginTop: "6%",
    marginLeft: "5%",
    fontFamily: "Roboto",
    fontSize: 25,
    lineHeight: 29.3,
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
        marginLeft:"5%",
        marginTop: "6%",
        justifyContent:"space-between",
        flexDirection: "row",
      width: "95%",
      height: "14%",
     },
});