import React, { useState, useEffect, useRef} from 'react';
import {StyleSheet, View, TextInput, Text, Image, TouchableOpacity} from "react-native";
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Back from 'react-native-vector-icons/AntDesign';


export default function Fullmap({navigation}){

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

useEffect(() => {
  const comeback = navigation.addListener('beforeRemove', e => {
     navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
     return true;
  })
  return comeback; 
}, [navigation])

    useEffect(() =>{
    navigation.getParent().setOptions({tabBarStyle:{ display: 'none'} });
}, []);

    return <>

    <View style={{flex: 1,}}>
   

<MapView 
   /** onPress={} */ 
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
    onReady={result=>{
    console.log(result);
    } }
  /> }
  </MapView> 

<TouchableOpacity  style={style.searchBox} 
onPress={() =>{
  navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
  navigation.navigate('home')
 }}>
<View >
    <Text style={style.input}>Local de entrega</Text>
    <Icon name="ios-search-outline" size={25} color={"#ACBBC3"} style={style.icons} />
 </View>

</TouchableOpacity>

 <TouchableOpacity style={style.Touch} onPress={() =>{

  navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
  navigation.goBack();
 }} >
  <View style={style.back}>
   <Back name='arrowleft' size={25}  color={"white"} />
  </View>
   </TouchableOpacity>

    </View>
    </>
}

const style = StyleSheet.create({
  agendar:{
   position:"absolute",
   top: 14,
   left:"30%"
  },
    searchBox:{
   position:"absolute",
   borderColor: "#ACBBC3",
   borderRadius: 8,
   borderWidth:1,
   height: 60,
   elevation:10,
   backgroundColor:"#fff",
   width: "83%", 
   top: 20,
   left:"7%",
    },
      map:{
       flex:1
      },
      input:{
        fontFamily:"Inter",
        fontSize: 16,
        lineHeight: 24,
        color: "#ACBBC3",
        padding: 14,
      },
      icons:{
        position:"absolute",
        left:"90%",
        top: 14,
      },
      Touch:{
        position:"absolute",
        width:42,
        justifyContent:"center",
        alignItems:"center",
        height: 42,
        bottom: 44,
        backgroundColor:"#21CA83",
        borderRadius: 40,
        left: 12
      },
      back:{
        width: 20,
        borderRadius: 12,
        height: 20,
      },
      
});