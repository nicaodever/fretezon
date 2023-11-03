import React, { useState, useRef } from "react";
import { View, StyleSheet, TextInput, Dimensions, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { salvarFretes } from "../../../servicos/firestore";
import { RFValue } from "react-native-responsive-fontsize";
import Veiculos from "./veiculos";


import Botao from "../../../componentes/button";
import Money from 'react-native-vector-icons/FontAwesome5';
import Seta from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';


//componentes
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";


function Detalhes({ route }) {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const navigation = useNavigation();
    const [complemento, setComplemento] = useState('');
    const [origem, setOrigem] = useState(route.params?.partida);
    const [entrega, setEntrega] = useState(route.params?.entrega)
    // const navigation = useNavigation(); 
    const [veiculo, setVeiculo] = useState('');
    const [hora, setHora] = useState('');
    const [data, setData] = useState('');
    const { width, height } = Dimensions.get('screen');


    async function agendarFrete() {
        if (veiculo == '' || hora == '' || data == '') {
            alert("Preencha todos os campos")
            return
        }
        const resultado = await salvarFretes({ veiculo, hora, data, origem })
        if (resultado == 'erro') {
            alert('Error ao criar o produto')
        }
        else {
        }
    }


    return (


        <View style={{ flex: 1, backgroundColor: "white" }}>

            <View style={{
                height: height / 5.5,
            }}>
                <View style={style.grupo}>

                    <TextInput style={style.input} placeholder="Local de partida" >
                        <Text>Fundação Matias Machiline  </Text>
                    </TextInput>
                    <TextInput style={{ padding: 10, marginLeft: 16 }} placeholder="Local de entrega" >
                        <Text> {origem} </Text>
                    </TextInput>
                </View>
                <Icon name="controller-record" size={15} color={"#21CA83"} style={style.green} />
                <Icon name="controller-record" size={15} color={"#055030"} style={style.dark} />
            </View>
            <ScrollView   >
                <View style={{ height: height / 3.5, flexDirection: "row", }}>
                    <View style={{ height: "60%", width: "45%", marginLeft: "5%" }}>
                        <Text style={style.title} >Data</Text>
                        <TextInput placeholder="30/11/2022" style={style.Textinput}
                            onChangeText={
                                texto => setData(texto)}
                        />
                        <Text style={style.title} >Hora</Text>
                        <TextInput placeholder="14:50" style={style.Textinput}
                            onChangeText={
                                texto => setHora(texto)}
                        />
                    </View>
                    <View style={{ height: "90%", width: "45%", borderLeftWidth: 1 }}>
                        <Text style={style.title2} >Veículo</Text>
                        <TouchableOpacity onPress={() => { bottomSheetRef.current?.expand(); }} >
                            <View style={style.Textinput2}>
                                <Text>Frete Bau</Text>
                                <Seta name="down" size={24} color="#C3C2C8" style={style.down} />

                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
                <Text style={style.complemento}>Complemento</Text>
                <TextInput style={style.inptComplementos} placeholder="Escreva informações adicionais da carga"
                    onChangeText={
                        texto => setComplemento(texto)}
                />

                <View style={{
                    alignItems: "center",
                    marginTop: "20%",
                    height: height / 4.5,
                    borderTopWidth: 0.5,


                }}>
                    <TouchableOpacity style={{ width: "100%" }} onPress={() => {
                        navigation.navigate('pagamento');
                    }} >
                        <View style={style.pagamentos}>
                            <Money name="money-check" size={40} color={"#B0B0B0"} style={style.Icon} />
                            <Text style={style.cartão} >1111(Débito)</Text>
                            <Seta name="right" size={17} color={"#222222"} style={style.Seta} />

                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: "15%" }}>
                        <Botao
                            onPress={() => agendarFrete()} >
                            <Text>Avançar</Text>
                        </Botao>
                    </View>

                </View>

            </ScrollView>

            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={[1, '80%']}
                handleIndicatorStyle={{
                    height: 9,
                    backgroundColor: "#D9D9D9",
                    width: "20%",
                }}>
                <View style={{ backgroundColor: "red", flex: 1 }}>
                </View>
            </BottomSheet>
        </View>



    );
}


const style = StyleSheet.create({
    grupo: {
        backgroundColor: "#E6E6E6",
        width: "80%",
        marginTop: "5%",
        borderRadius: 20,
        height: "65%",
        marginLeft: "10%",

    },
    input: {
        backgroundColor: "#CFCFCF",
        borderRadius: 12,
        height: "50%",
        paddingLeft: 28,
        width: "100%"
    },
    green: {
        position: "absolute",
        top: 43,
        left: 50
    },
    dark: {
        position: "absolute",
        top: 92,
        left: 50
    },
    Textinput: {
        width: 110,
        borderWidth: 1,
        borderColor: "#C3C2C8",
        marginVertical: 12,
        borderRadius: 8,
        padding: 12,
        height: 48
    },
    Textinput2: {
        width: "90%",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#C3C2C8",
        marginVertical: 12,
        borderRadius: 8,
        padding: 12,
        height: 48,
        marginLeft: "10%"

    },
    title: {
        fontFamily: "Poppins",
        fontSize: RFValue(16),
        lineHeight: 33
    },
    title2: {
        fontFamily: "Poppins",
        fontSize: RFValue(16),
        lineHeight: 33,
        marginLeft: "10%"
    },
    complemento: {
        fontFamily: "Poppins",
        fontSize: 22,
        lineHeight: 33,
        marginLeft: "5%"
    },
    inptComplementos: {
        width: "90%",
        marginLeft: "5%",
        backgroundColor: "#E6E6E6",
        marginTop: "5%",
        padding: 10,
        color: "#888888",
        fontFamily: "Inter",
        lineHeight: 18,
        opacity: 10,
        fontSize: 15
    },
    cartão: {
        marginTop: 24,
        marginLeft: 24,
        fontFamily: "Inter",
        fontSize: 15,
        lineHeight: 19,
        color: "#888888"
    },
    pagamentos: {
        width: "100%",
        alignItems: "center",
        marginTop: 1,
        flexDirection: "row",
    },
    Icon: {
        marginTop: 24,
        marginLeft: "5%"
    },
    Seta: {
        marginTop: 25,
        marginLeft: "45%"

    },
    down: {
        marginLeft: "40%"
    }
})

export default gestureHandlerRootHOC(Detalhes);