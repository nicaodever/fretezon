import React, { useState, useEffect, useRef} from 'react';
import { View, Image, StyleSheet, Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import config from '../../../../config/index.json';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Icon from 'react-native-vector-icons/Entypo';

export default function Body(){
    const [ origin, setOrign]=useState(null);
    const MapEl = useRef(null);
    const [destination, setDestination]=useState(null);
    const [distance, setDistance]=useState(null);
    const navigation = useNavigation();
    
      useEffect(() =>{

        setOrign({
          latitude:-3.13409136664544,
          longitude:  -59.97921557400411,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        })
      setDestination({
        latitude:-3.10228172454618, 
        longitude:  -60.011950125914936,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
       
    });
  }, []);
  
    return <>
    <View style={style.div}>
    <MapView 
    style={style.map}
    showsUserLocation={false}
    loadingEnabled={true}
    ref={MapEl}>

    {destination &&  
   <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={config.googleApi}
    strokeWidth={2}
    strokeColor='#585858CC'
    optimizeWaypoints={true}
    onReady={result=>{
    setDistance(result.distance);
     MapEl.current.fitToCoordinates(
      result.coordinates,{
        edgePadding:{
          top: 20,
          left: 20,
          bottom:20,
          right: 20,
        }
      }
     )
    } }
  />
   }
  </MapView> 
  {distance &&  
  <Text style={style.distancia}>Distancia: {distance}m</Text>
  }
   <View style={{width:"90%", marginTop: 20,}}>
    <View style={{flexDirection:"row", height: 40, marginTop: 20,marginBottom:"5%", marginLeft: 20}}> 
    <Icon name="controller-record" size={15} color={"#21CA83"} style={style.icons} />
    <Text style={style.txt}>Manauara Shopping</Text>
    </View>


   <View style={style.divisor}/>

   <View style={{ flexDirection:"row", height: 80, marginTop: 20, marginLeft: 20, }}>
   <Icon name="controller-record" size={15} color={"#055030"} style={style.icons} />
   <Text style={style.txt}>Fundação Matias Machline</Text>
   </View>
   <View style={style.inptComplementos} >
    <Text style={style.placeholder}>Descrição da carga levada</Text>
   </View>
   
   </View>

    </View>
    </>
}

const style = StyleSheet.create({
   div:{
    backgroundColor: "white",
    alignItems:"center",
    width:"100%",
    height:"70%",
   },
   icons:{
    marginRight: "8%"
   },
   map:{
    width:"94%",
    borderRadius: 12,
    height: "35%",
    
  },
   divisor:{
    width:"100%",
    height: 1,
    backgroundColor:"black"
   },
   txt:{
    fontFamily:"InterLight",
    fontSize: 18,
    width:"90%",
    lineHeight: 20,
    fontWeight:300,
   },
   inptComplementos:{
    width:"100%",
    backgroundColor:"#E6E6E6",
    alignItems:"center",
    justifyContent:"center",
    height: "20%",
    color:"#888888",
    fontFamily:"Inter",
    lineHeight:18,
    opacity:10,
    fontSize: 15
    },
   placeholder:{
    fontFamily:"Inter",
    lineHeight: 15,
    fontSize: 15,
   },
   distancia:{
    position:"absolute",
    fontSize:12,
    fontFamily:"InterBold",
    left:"5%"
   }
});