import React, {useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from './componetes/header';
import Body from './componetes/body';

export default function Home(){
   
  return <>
     <View style={style.back}> 
  <Header/>
  <Body/>   
     </View>
  </>
}

const style = StyleSheet.create({
   back:{
      width:"100%",
      height:"100%",
    backgroundColor: "white",
   },
   map:{
     flex:1,
     width:"100%",
   }

});