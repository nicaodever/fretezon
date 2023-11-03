import React, { useState, useEffect, useRef, useReducer, useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Modal, Dimensions, TextInput} from "react-native";


//Functions
import { salvarFretes, AtualizarFretes , deletarFretes} from "../../servicos/firestore";
import { RFValue } from "react-native-responsive-fontsize";

//Componentes
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import   BottomSheet,{ BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
//Icons 
import Icon from 'react-native-vector-icons/Entypo';
import Truck from 'react-native-vector-icons/FontAwesome';
import Antdesing from 'react-native-vector-icons/AntDesign';
import Time from 'react-native-vector-icons/Ionicons';
import Cancel from 'react-native-vector-icons/EvilIcons';
import Edit from 'react-native-vector-icons/Feather';



function Crud ({ route, navigation}) {  
  const bottomSheetRef = useRef<BottomSheet>(null);
  const modalizeRef  = useRef(null)
  const [modalVisible, setModalVisible] = useState(false);
  const [distance, setDistance] = useState('9,0')
  const [origem, setOrigem] = useState(route?.params.origem || '')
  const [veiculo, setVeiculo] = useState(route?.params.veiculo || '');
  const [data, setData] = useState(route?.params.data || '')
  const [hora, setHora] = useState(route?.params?.hora || '');
  
  useEffect(() => {
    const comeback = navigation.addListener('beforeRemove', e => {
       navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
       return true;
    })
    return comeback; 
 }, [navigation])
   useEffect(() =>{
    navigation.getParent().setOptions({tabBarStyle:{ display: 'none'} });
       })

   async function editarFrete() {
     if (origem == '' || hora == '') {
       alert('Preencha todos os campos')
      return
    }
    let resultado = ''
    if (route?.params) {
      alert("Editado")
      resultado = await AtualizarFretes(route?.params.id, {
      origem, hora
      })
    }
    else {
      resultado = await salvarFretes({ origem, hora })
    }

    if (resultado == 'erro') {
        alert('Erro ao editar')
    }
    else {
   
    }
  }

  async function apagar() {
    deletarFretes(route?.params.id)
    navigation.goBack()
    navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
  }
  
  //Configs Modalize
  const {width, height } = Dimensions.get('screen')
 
  return <>
   <BottomSheetModalProvider>
   <View style={{ flex: 1 , backgroundColor:"#F3F3F3"}}>
      <View style={style.Header}>
        <TouchableOpacity style={{ marginLeft: "5%" }} onPress={()=> {
           navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
          navigation.goBack()}}>
          <Image style={style.back} source={require('../../../assets/setagreen.png')} />
        </TouchableOpacity>
        <Text style={style.txt}>Ajuda</Text>
      </View>
     <View style={style.bloco}>
     
     <View style={{ height:"50%",width:"90%", marginLeft:"5%",  }}>
      <Icon name="controller-record" size={20} color={"#21CA83"}  style={style.green}/>
      <Icon name="controller-record" size={20} color={"#055030"}  style={style.dark}/>
      <View style={{height:"60%",width:"100%", marginTop:"8%", }}>
      <Text style={style.places}> Fundação Matias Machline </Text>
      <View style={{borderLeftWidth:0.5, height:"36%",marginLeft:"3%", borderColor:"#606060"}} />
      
      </View>
         
      </View>
      <View style={style.details}>
          <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
            <View style={{flexDirection:"row"}}>
            <Antdesing color={"#2E2E2E"} name='calendar' size={25} />
          <Text style={style.dataHora} >{data}, {hora} </Text> 
            </View>
          <View style={{flexDirection:"row"}}>
            <Truck name='truck' size={25} style={{marginRight:'5%'}} />
            <Text style={style.dataHora}>{veiculo}</Text>
                      </View>
         
          </View>
          <View style={style.Descricao}>
            <Text style={{fontFamily:"InterLight", fontSize:RFValue(12), lineHeight:20}}>Descrição da Carga</Text>
          </View>
   
         </View>
                
    <TouchableOpacity onPress={() =>{ 
      setModalVisible(true)}}>
    <View style={style.cancelar}>
    <Text style={{color:"#F33333", marginTop:"2%", fontFamily:"InterBold", fontSize:RFValue(16),
    }}>Cancelar Pedido</Text>
    </View>
   </TouchableOpacity>
     </View>
    <Modal
     animationType='fade'
     transparent={true}
     visible={modalVisible}
     onRequestClose={() => setModalVisible(false)}
    >
      <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:'rgba(0,0,0,0.6)' }}>
      <View style={style.modal}>
        <View style={{flexDirection:"row" , marginTop:"5%"}}> 
        <Text style={style.titleCancelar}>Deseja cancelar o seu pedido?</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{marginLeft:"5%"}}>
       <Cancel name='close' size={35} style={{marginTop:"8%" }} />
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", marginTop:"5%"}}>
        <Antdesing name='creditcard' size={25} style={{marginTop:"2%"}} />
        <Text style={{
          width:"70%",
          marginLeft:"4%",
          fontFamily:"InterLight", fontSize:RFValue(14)}}>
         Não será cobrado nenhuma taxa de cancelamento.</Text>
        </View>


        <View style={{borderTopWidth:1, width:"90%", marginTop:"5%",}}> 
          <TouchableOpacity style={{marginTop:"5%"}} onPress={() => apagar()}>
            <View style={{marginLeft:"20%", width:"60%",height:"60%", borderWidth:1 , borderColor:"#21CA83", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontFamily:"Inter", fontSize:RFValue(14)}}> Cancelar </Text>
            </View>
            
          </TouchableOpacity>
        </View>
        
    </View>
      </View>    
    </Modal>
     <View style={style.pagamento}>
     <Text style={{
      fontFamily:"Inter",
      fontSize:16,
      lineHeight:20,
   
     }}> R$ 75,40</Text>
     <Text style={{
      fontFamily:"InterLight",
     fontSize:16,
     color:"#236AF2"
     }} > Forma de pagamento</Text>
     </View>

      <View style={style.espera}>
      <Time name='timer-outline' size={30} style={{ 
        margin:"5%",
      }} />
      <Text style={style.text}> Pedido em espera</Text>
      <TouchableOpacity  onPress={() => {bottomSheetRef.current?.expand();}}
      style={{marginLeft:"30%"}}>
      <Edit name="edit" size={25} />
      </TouchableOpacity>
      </View>  
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={[1, '80%', '40%']}
        handleIndicatorStyle={{
          height: 9,
          backgroundColor: "#D9D9D9",
          width: "20%",
        }}>
            <View>
            <View style={style.grupo}>

              <TextInput style={style.input} placeholder="Local de partida" >
                <Text>Fundação Matias Machiline  </Text>
              </TextInput>
              <TextInput style={{ padding: 10, marginLeft: 16 }} placeholder="Local de entrega" >
                <Text> {origem} </Text>
              </TextInput>
            </View>
            </View>
      </BottomSheet>
    </View>
   </BottomSheetModalProvider>
    
  </>
}
const style = StyleSheet.create({
  back:{
    width:15,
    height:20
  },
  title:{
    fontFamily:"Poppins",
    fontSize: 22,
    lineHeight: 33
},

  Header:{
    height:"10%",
    flexDirection:"row",
    alignItems:"center",  
    justifyContent:"space-between",
    backgroundColor:"white",
    elevation:12,
    width:'100%'
},
txt:{
    fontFamily:"Inter",
    fontSize: RFValue(15),
    lineHeight:20,
    marginRight:"5%"
},
  alinhar:{
    backgroundColor:"white",
    flex:1,
    alignItems:"center"
  },
  bloco:{
    width:"90%",
    height:"50%",
    backgroundColor:"white",
    marginTop:"5%",
    marginLeft:"5%",
    borderRadius:16,
    elevation:12
  },
  green: {
    position: "absolute",
    top: 32,
     
  },
  dark: {
    position: "absolute",
    top: 92,
    
  },
  details:{
   height:"30%",
   marginLeft:"5%",
   width:"90%"
  },
  dataHora:{
  fontFamily:"InterLight",
  marginLeft:"2%",
  fontSize:RFValue(12),
  lineHeight:20,

  },
  places: {
    fontFamily: "Inter",
    fontSize: RFValue(13),
    marginLeft:"5%",
    width:"90%",
  },
  distance:{
   fontFamily:"InterLight",
   fontSize:RFValue(13)
  },
  Descricao:{
   width:"100%",
   height:"45%",
   justifyContent:"center",
   alignItems:"center",
   marginTop:"2%",
   backgroundColor:"#E6E6E6"
  },
  cancelar:{
   width:"100%",
   height:"40%",
   alignItems:"center",
   borderTopWidth:1,
   
  },
  pagamento:{
    width:"90%",
    marginLeft:"5%",
    height:"10%",
    flexDirection:"row",
    backgroundColor:"white",
    marginTop:"10%",
    borderRadius:16,
    justifyContent:"space-around",
    alignItems:"center",
    elevation:12
  },
  titleCancelar:{
    fontFamily:"Inter",
    width:"70%",
    fontSize: RFValue(20),
    
  },
  modal: {
    width: "80%",
    height: "28%",
    borderRadius: 12,
    backgroundColor: "white",
    alignItems: "center"

  },
  espera:{
    width:"90%",
    height:"10%",
    backgroundColor:"white",
    flexDirection:"row",
    borderRadius:16,
    elevation:12,
    marginTop:"10%",
    alignItems:"center",
    marginLeft:"5%"
  },
  text:{
   fontFamily:"InterLight",
   fontSize:RFValue(14),
   lineHeight:20,

  },

divisor:{
    width:1,
    height:"100%",
    marginTop:5,
    borderColor: "#888888",
    marginLeft: 48,
    marginRight: 24,
    borderWidth: 1,
},
complemento:{
    fontFamily:"Poppins",
    fontSize: 22,
    lineHeight: 33,
    marginTop: 24,
     marginLeft:"5%"
},
inptComplementos:{
width:"90%",
marginLeft:"5%",
backgroundColor:"#E6E6E6",
marginTop: "5%",
padding:8,
height: "8%",
color:"#888888",
fontFamily:"Inter",
lineHeight:18,
opacity:10,
fontSize: 15
},
div:{
    alignItems:"center",
    marginTop:"15%",
    height:"35%",
   backgroundColor:"white",
   borderColor:"#D8D8D8",
   borderWidth:1.2,
   elevation:20,
    
},
container:{
  flexDirection:"row",
  backgroundColor:"white",
  width: "90%",
  marginLeft:"5%",
 
  },

  select:{
  width:170,
  height: 48,
  padding:8,
  marginVertical: 12,
  borderColor: "#C3C2C8",
  borderRadius:8,
  borderWidth: 1,
  },
  grupo:{
    backgroundColor:"#E6E6E6",
    width:"80%",
    marginTop:"5%",
    borderRadius:20,
    height: "50%",
    marginLeft:"10%",
},
input:{
    backgroundColor:"#CFCFCF",
    borderRadius: 12,
   height: "40%",
    paddingLeft: 28,
    width:"100%"
},
})


export default gestureHandlerRootHOC(Crud);