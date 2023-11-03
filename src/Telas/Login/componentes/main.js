import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from "react-native";

import { login } from "../../../servicos/firestore";
import InputForms from '../../../componentes/Forms/index';
import Label from '../../../componentes/Label/index';
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { cadastrar } from "../../../servicos/requisicoesFirebase";

export default function main() {
    const navigation = useNavigation();
    const {width, height } = Dimensions.get('screen');
    const [selectadTab, setSelectadTab] = useState(0);
    const [label, setLabel] = useState('Número de Telefone');
    const [placeholder, setPlaceholder] = useState('(xx) xxxxxxxxx')

    //Login
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    async function realizarLogin() {        
     if(email=='' || senha==''){
            alert("Preencha todos os campos")
        }
        else{
            const resultado = await login(email, senha);
            if (resultado == 'Erro') {
              alert("Erro ao logar")
            } 
            else{
                navigation.navigate("home")
            }
        }
    }
    
    //Cadastro
      async function realizarCadastro(){
        await cadastrar(email, senha);
        setEmail('') 
        setSenha('')
      }

    return <>

        <View style={{ 
        width: "90%",
        height: height/4,
        marginLeft: "5%",
        marginRight: "5%",}}>
            
            <Text style={style.Logo}>Frete<Text style={{ color: "#21CA83" }}>zon</Text></Text>
            <Text style={style.text}>Preencha os campos para logar</Text>
            <View style={style.alternar}>
                <TouchableOpacity style={{
                    width: "44%",
                    marginLeft: "4%",
                    borderRadius: selectadTab == 0 ? 40 : 8,
                    marginTop: "2%",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80%",
                    backgroundColor: selectadTab == 0 ? "#21CA83" : "white",
                }}
                    title="Telefone"
                    onPress={() => {
                        setSelectadTab(0);
                        setLabel("Número de Telefone");
                        setPlaceholder("(xx) xxxxxxxxx");
                    }}>
                    <Text style={{
                        color: selectadTab == 0 ? "white" : "black",
                        fontFamily: "Poppins",
                        fontSize: RFValue(12),
                        lineHeight: 24,
                    }}>Telefone</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: "44%",
                    marginLeft: "4%",
                    borderRadius: selectadTab == 1 ? 40 : 8,
                    marginTop: "2%",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80%",
                    backgroundColor: selectadTab == 1 ? "#21CA83" : "white",
                }}
                    title="Email"
                    onPress={() => {
                        setSelectadTab(1);
                        setLabel("Email");
                        setPlaceholder("user@gmail.com");

                    }} >
                    <Text style={{
                        color: selectadTab == 1 ? "white" : "black",
                        fontFamily: "Poppins",
                        fontSize: RFValue(12),
                        lineHeight: 24,
                    }}>Email</Text>
                </TouchableOpacity>

            </View>
        </View>
        <View style={styles.div}>
            <Label>{label}  </Label>
            <InputForms
                placeholder={placeholder}
                value={email}
                onChangeText={texto => setEmail(texto)}
            />

            <Label> Senha</Label>
            <InputForms
                placeholder="••••••••"
                secureTextEntry={true}
                value={senha}
                onChangeText={texto => setSenha(texto)} />

            <Text style={styles.senha}>Esqueceu a Senha?</Text>
            <TouchableOpacity style={styles.botao}
                onPress={() => {navigation.navigate("home")}}>
                <Text style={{ color: "white", fontSize: 18, lineHeight: 20, fontFamily: "Inter" }}>
                    Login</Text>
            </TouchableOpacity>


            <View style={{
                width: "90%",
                marginLeft: "5%",
                marginRight: "5%",
                alignItems: "center"
            }}>

                <Label> Não tem uma conta?
                    <Text style={styles.senha} onPress={() => {navigation.navigate("cadastro")}}>
                        Cadastre-se</Text></Label></View>

            {/* <TouchableOpacity style={style.google}> 
               
                    <Image style={{ width: 40, height: 40, marginLeft: "8%" }} source={require('../../../../assets/icon-google.png')} />
                    <Text style={style.txtGoogle}>Entrar com o Google</Text>
                
            </TouchableOpacity> */}
        </View>

    </>
}

const style = StyleSheet.create({
    alternar: {
        flexDirection: "row",
        marginTop: "2%",
        backgroundColor: "#E7E7E7",
        width: "100%",
        borderRadius: 8,
        height: "40%",
    },
    div: {
        width: "90%",
        height: "25%",
        marginLeft: "5%",
        marginRight: "5%",
    },
    Logo: {
        fontSize: RFValue(40),
        lineHeight: 50,
        marginTop: 30,
        //fontWeight: 800,
        fontFamily: "InterBold",
    },
    text: {
        marginTop: 10,
        fontSize: RFValue(14),
        color: "#888888",
        fontFamily: "Poppins",
        lineHeight: 24,
    },
    google: {
        width: "100%",
        flexDirection: "row",
        borderRadius: 8,
        elevation:12,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.25)",
        height: 58,
        backgroundColor: "#FFFFFF",
       justifyContent:"center", 
        alignItems: "center"

    },
    txtGoogle: {
        
        fontFamily: "InterLight",
        color:"#000000CC",
        fontSize: RFValue(18),
        lineHeight: 25,
    },
})
const styles = StyleSheet.create({
    botao: {
        marginTop: "6%",
        backgroundColor: "#21CA83",
        height: "12%",
        justifyContent: "center",
        alignItems: "center", 
        borderRadius: 32,
    },
    div: {
        marginTop: "0%",
        width: "90%",
        height: "70%",
        marginLeft: "5%",
        marginRight: "5%",
    },


    senha: {
        marginTop: "5%",
        color: "#21BDCA",
        fontFamily: "PoppinsBold",
        lineHeight: 18,
        fontSize: RFValue(12),
    }

})