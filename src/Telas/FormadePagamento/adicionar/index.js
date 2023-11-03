import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

export default function Adicionar(){
    
    return <>
    <View style={{flex:1}}>
    <View style={{  backgroundColor:"white"    }}>
         
         <TouchableOpacity  style={{margin:"5%"}} onPress={() =>{ }}>
          <Image  style={style.close} source={require('../../../../assets/setagreen.png')}/>
         
         </TouchableOpacity>
          <Text style={style.title}>Adicione uma nova forma de pagamento</Text>
          </View>
          <View style={{ marginTop: "5%",    alignItems:"center",}}> 

         
          < View style={style.blocos}>
          <Image  source={require('../../../../assets/creditcard.png')}/>
         <Text style={style.details}>Cartão de crédito ou débito</Text>
         {/* <Icon name='check' size={25} /> */}
          </View>
          < View style={style.blocos}>
          <Image  source={require('../../../../assets/pix.png')}/>
         <Text style={style.details}>PIX</Text>
          </View>
         </View>
    </View>
    
    </>
}

const style = StyleSheet.create({
    divClose:{
        backgroundColor:"#21CA83" ,
        width: 50,
        height: 40,
        margin: "5%",
        borderRadius: 40,
        justifyContent:"center",
        alignItems:"center"   
    },
   close:{
   width:20,
   height:32
   },
   title:{
  fontFamily:"Poppins",
   fontSize: RFValue(22) ,
   lineHeight:33,
   marginLeft:"5%"
   },
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
    marginTop:"10%"
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