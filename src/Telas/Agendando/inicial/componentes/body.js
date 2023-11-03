import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, View, Text, TextInput,} from "react-native";
import LocaisRecentes from "../../../../componentes/LocaisRecentes";
import Botao from "../../../../componentes/button";
import { useNavigation } from "@react-navigation/native";
import  {Location} from 'expo-location';
import config from '../../../../../config/index.json';
import Icon from 'react-native-vector-icons/Feather';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Body(props){
  const navigation = useNavigation();
  const [distance, setDistance]=useState(null);
  const [ origin, setOrign]=useState("Fundação Matias Machiline");
  const [destination, setDestination]=useState(null);
   
  const [partida, setPartida]=useState('')

//



    return(
    <View style={style.container}>
       <Text  style={style.txt}>Ponto de entrega da carga</Text>
        <GooglePlacesAutocomplete
          minLength={2}
          autoFocus={false}
          listViewDisplayed="auto"
          returnKeyType={'search'}
          fetchDetails={true}
          placeholder='Local de entrega'
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            setPartida(data.description)
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            });
                   
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
            type: 'establishment'
          }}
          styles={styles}>
        </GooglePlacesAutocomplete>
     

       <View style={{ position:"absolute", top:120, width:"100%"}}>
     
       </View>
       <View style={{ marginTop:"90%", alignItems: "center" }}>
        <Botao onPress={() =>  {navigation.navigate('detalhes', {partida:partida, entrega:origin} )} } > <Text> Avançar </Text></Botao>
      </View>
      {/* <Icon name='search' size={25} color={"#888888"} style={style.search} /> */}
  
    </View>
  );
}

const style = StyleSheet.create({
    container:{
  width:"90%",
     marginLeft:"5%",
     backgroundColor:"white",
    
    },
    txt:{
        fontFamily:"Poppins",
        marginRight:"12%",
        marginBottom:"8%",
        fontSize:22,
        lineHeight: 33
    },
   
    search:{
      position:"absolute",
      top: "12%",
      left:"5%"
    }
});
const styles = StyleSheet.create({
  textInputContainer:{
    backgroundColor: '#ECECEC',
    width:'100%',
},
description:{
  fontWeight:"bold"
}, 
textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 60,
    color: '#5d5d5d',
    backgroundColor:"#ECECEC",
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: '#1faadb'
  },
  listView:{
      top:60  ,
      zIndex:10,
      position: 'absolute',
      color: 'black',
      backgroundColor:"white",
      width:'89%',
  },
  separator:{
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'blue',
  },


})
