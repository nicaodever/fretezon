import React, { useState, useEffect, useRef, useReducer, useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Modal, Dimensions, TextInput } from "react-native";
import imagePath from '../../mapsComponente/imagePath';

//Componentes
import Motorista from '../../componentes/Motorista';

//Functions
import { salvarFretes, AtualizarFretes, deletarFretes } from "../../servicos/firestore";
import { RFValue } from "react-native-responsive-fontsize";

//Bibliotecas
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import config from '../../../config/index.json';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider
} from "@gorhom/bottom-sheet";

//Icons 




function CorridaAceita({ route, navigation }) {
  //vairaveis
  const [pagamento, setPagamento] = useState('75,40')
  const [formaPagamento, setFormapagamento] = useState("Dinheiro")

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [origin, setOrign] = useState(null);
  const MapEl = useRef(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {

    setOrign({
      latitude: -3.13409136664544,
      longitude: -59.97921557400411,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    })
    setDestination({
      latitude: -3.0216265511289397,
      longitude: -60.05619020841378,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,

    });
  }, []);

  async function Desenvolvimento() {
     alert("Em analise...")
  }

  //Configs Modalize
  const { width, height } = Dimensions.get('screen')

  return <>
    <BottomSheetModalProvider>

      <View style={{ backgroundColor: "red", flex: 1 }}>
        <MapView
          style={style.map}
          showsUserLocation={false}
          loadingEnabled={true}
          ref={MapEl}>
          
          <Marker
          coordinate={destination} 
          image={imagePath.icCurLoc}>

          </Marker>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={config.googleApi}
            strokeWidth={2}
            strokeColor='#585858CC'
            optimizeWaypoints={false}

            onReady={result => {
              setDistance(result.distance);
              MapEl.current.fitToCoordinates(
                result.coordinates, {
                edgePadding: {
                  top: 20,
                  left: 20,
                  bottom: 100,
                  right: 20,
                }
              }
              )
            }}
          />

        </MapView>
        {/* {distance &&
          <Text style={style.distancia}>Distancia: {distance}m</Text>
        } */}
          <View style={style.minutos}>
            <Text style={style.txtmin}>
              40
            </Text>
         <Text style={style.txtmin}>min</Text>
          </View>

        <BottomSheet
          ref={bottomSheetRef}
          backgroundStyle={{ borderRadius: 40 }}
          index={1}
          snapPoints={['90%', '58%']}
          handleIndicatorStyle={{
            height: 8,
            backgroundColor: "#D9D9D9",
            width: "20%",
          }}>
          <View style={style.container}>
            <Text style={style.title}>
              Seu motorista está a caminho
            </Text>
            <View style={style.descricao}>
              <View style={{ flexDirection: "row", height: "20%", alignItems: "center" }}>
                <Image source={require('../../../assets/user.png')} style={style.perfil} />
                <Image source={require('../../../assets/caminhao.png')} style={style.truck} />

                <View style={{ marginLeft: "5%" }}>
                  <Text style={style.placa}>QQX4D95 </Text>
                  <Text style={style.carro}>Chevrolet Saveiro Vermelho</Text>
                </View>
              </View>
              <Motorista avaliação="4.5" nome="Waddi" />
              <View style={style.infos}>
                <View style={style.div}>
                  <View>
                    <Text style={style.pagamento}> R${pagamento} </Text>
                    <Text style={{ fontFamily: "InterLight", fontSize: RFValue(13) }}> {formaPagamento} </Text></View>
                  <TouchableOpacity onPress={() => Desenvolvimento()}>
                    <Text style={style.link}>forma de pagamento</Text>
                  </TouchableOpacity>

                </View>
                <View style={style.div}>
                  <View style={{flexDirection:"row"}}>
                  <Image source={require("../../../assets/location.png")} style={{width:20, height:20}} />
                    <Text style={style.pagamento}> Sleep in Aeroporto </Text>
                  </View>
                  
                  <TouchableOpacity onPress={() => Desenvolvimento()}>
                    <Text style={style.link}>adicionar ou alterar</Text>
                  </TouchableOpacity>

                </View>
                
                  <View style={{flexDirection:"row", height:"25%",  marginTop:"4%", alignItems:"center"}}>
                  <Image source={require("../../../assets/map.png")} style={{width:"6.5%", height:"60%", marginRight:"1%"}} />
                <TouchableOpacity style={{flexDirection:"row"}} onPress={() => Desenvolvimento()}>
                <Text style={style.link}>Compartilhar status do frete</Text>
                </TouchableOpacity>
                
                  </View>
              </View>
              <TouchableOpacity>
              <View style={style.cancelar}>
                  <Text style={style.txtCancelar}>Cancelar Pedido</Text>
                </View>
              </TouchableOpacity>
               
            </View>
      
          </View>
        </BottomSheet>
      </View>


    </BottomSheetModalProvider>

  </>
}
const style = StyleSheet.create({
  map: {
    width: "100%",
    borderRadius: 12,
    height: "55%",
  },
  distancia: {
    position: "absolute",
    fontSize: RFValue(12),
    fontFamily: "InterBold",
    left: "5%"
  },
  minutos:{
    backgroundColor:"#21CA83",
    height:"7%",
    width:"17%",
    position:"absolute",
    alignItems:"center",
    top:"30%",
    left:"78%"
  },
  txtmin:{
  fontFamily:"InterRegular",
  fontSize:RFValue(18),
  color:"white"
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontFamily: "Inter",
    marginTop: "5%",
    fontSize: RFValue(18),
    lineHeight: 24
  },
  descricao: {
    height: "90%",
    marginTop: "3%",
    width: "90%",
    
    borderTopWidth: 0.5
  },
  perfil: {
    marginTop: "3%",
    width: "18%",
    height: "82%"
  },
  truck: {
    position: "absolute",
    left: "10%",
    top: "50%",
    width: "10%",
    height: "50%"
  },
  placa: {
    fontFamily: "Inter",
    fontSize: RFValue(15),
  },
  carro: {
    fontFamily: "InterLight",
    fontSize: RFValue(13)
  },
  infos: {
    marginTop: "5%",
    height: "40%",
  },
  div: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop:"5%"
  },
  pagamento: { 
    fontFamily: "InterRegular",
    fontSize: RFValue(14)
  },
  link: {
    fontFamily: "InterRegular",
    color: "#236AF2",
    backgroundColor:"white", 
    fontSize: RFValue(13)
  },
  cancelar:{
    borderTopWidth:0.3,
    marginTop:"10%",
   alignItems:"center"
  },  
  txtCancelar:{
  fontFamily:"InterBold",
  marginTop:"2%",
  fontSize:RFValue(16),
  color:"#F33333"
  }
})


export default gestureHandlerRootHOC(CorridaAceita);