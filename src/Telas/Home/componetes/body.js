import React, { useState, useEffect, useRef} from 'react';
import {StyleSheet, View, TextInput, Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Corridas from '../../../componentes/CorridasRecentes';
//maps:
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import config from '../../../../config/index.json';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ScrollView } from 'react-native-gesture-handler';


export default function Body() {
   const navigation = useNavigation();

  const [ origin, setOrign]=useState(null);
  const [destination, setDestination]=useState(null);
  
  useEffect(() =>{
      (async function(){
       const{ status, permissions } = await Permissions.askAsync(Permissions.LOCATION)
       if (status == 'granted') {
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setOrign({
          latitude:location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        })
       }
       else {
        throw new Error("location permission nao achada")
       }
      })();
  }, []);

   return <>
     <View style={style.back}>
    
      <View style={style.container}>

  <TouchableOpacity style={{ width: "100%", marginLeft: "5%" }}
  onPress={() => { navigation.navigate('agendar') }}
>
  <View style={style.input}>
    <Text style={style.placeholder}>Local de entrega</Text>
  </View>
</TouchableOpacity>

</View>


<Text style={style.text}>Fretistas perto de você</Text>

<MapView
onPress={() => navigation.navigate('fullmap')}
style={style.map}
initialRegion={origin}
showsUserLocation={true}
loadingEnabled={true}>
{destination &&
  <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={config.googleApi}
    strokeWidth={3}
    onReady={result => {
      console.log(result);
    }}
  />}
</MapView> 

<Corridas title="Rua Sebastião Noroes"  subtitle="Manaus-Am"/>

<Corridas title="Rua A, 224"  subtitle="Manaus-Am"/>
<Corridas title="Manauara Shopping"  subtitle="Manaus-Am"/>



 
       
  </View>
 
   </>
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "90%",
    borderWidth:1
  },
  description: {
    color: 'black',
    backgroundColor: "white",
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: 'white',
  },
  textInput: {
    height: 56,
    borderWidth: 1,
    borderColor: "#ACBBC3",
    borderRadius: 12,
    fontSize: 20,
  },
})
const style = StyleSheet.create({
    back:{
        flex:1,
        backgroundColor:"white",
       
        alignItems: 'center',
      
      
    },
    container:{
        alignItems:"center",
     width:"98%",
     height: 106,
    },
    map:{
        width:"94%",
        borderRadius: 12,
        height: "40%",
        
      },
    text:{
        position: 'absolute',
        top: 70,
        left: 12,
        width:"100%",
        marginRight: "53%",
        fontSize: 14,
       fontFamily: "Inter",
       color:"#45565F",
        lineHeight: 21,
    },
   
    Image:{
       width:"94%",
      height: 169,
    },
    input:{
      width:"95%",
      height: "75%",
      borderColor: "#ACBBC3",
      borderRadius: 8,
      borderWidth:1
    },
    placeholder:{
      fontFamily:"Inter",
      fontSize: 16,
      lineHeight: 24,
      color: "#ACBBC3",
      padding: 14,
    }

});