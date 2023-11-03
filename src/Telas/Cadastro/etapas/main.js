import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
{/*Telas */ }
import FormAccount from "./FormAccount";
import FormDetails from "./FormDetails";
import FormPassword from "./FormPassword";
import Final from './Final';
{/* componentes */ }
import Botao from "../../../componentes/button";
import Step from "../../../componentes/Steps/steps";
import Inicio from "../../../componentes/ProgressBar/inicio";
import Meio from "../../../componentes/ProgressBar/meio";
import Fim from "../../../componentes/ProgressBar/fim";

//Funções
import { salvarCliente, salvarFretes } from "../../../servicos/firestore";
import { cadastrar } from "../../../servicos/firestore";
import { useNavigation } from '@react-navigation/native';

export default function Main() {
    const navigation = useNavigation();
    const [step, setStep] = useState(1);
    const Steps = [1, 2, 3];
    const [botao, setBotao] = useState('Avançar');
    const [email, setEmail]=useState('');
    const[nome, setNome] = useState('');
    const[sobrenome, setSobrenome] = useState('');
    const[senha, setSenha] = useState('');
    const[confirmar, setConfirmar] = useState('');


    async function cadastrarCliente(){
        const resultado = await salvarCliente({email, senha, nome, sobrenome })
         if (resultado == 'erro') {
            alert('Error ao criar o produto')
        }
        else {
           navigation.navigate('concluido')
        }
    }



    const getScreens = () => {
        switch (step) {
            case 1:
                return <FormAccount setEmail={setEmail} />;
            case 2:
                return <FormDetails setNome={setNome}  setSobrenome={setSobrenome} />;
            case 3:
                return <FormPassword setSenha={setSenha} setConfirmar={setConfirmar} />;

        }
    }
    const getProgress = () => {
        switch (step) {
            case 1:
                return <Inicio />;
            case 2:
                return <Meio />;
            case 3:
                return <Fim />
        }
    }

    const getButton = () =>{
        switch (step) {
            case 1:
                return <>
                 <Botao style={style.bt}
                onPress={() => step !== 3 && setStep(step + 1)} >
                <Text>Avançar</Text>  </Botao>
                </> ;
            case 2:
                return <>
                 <Botao style={style.bt}
                onPress={() => step !== 3 && setStep(step + 1)} >
                <Text>Avançar</Text>  </Botao>
                </> ;
                case 3:
                    return <>
                     <Botao style={style.bt}
                     onPress={() =>  cadastrarCliente()} >
                     <Text>Finalizar</Text>  </Botao>
                     </> ;
        }
    }
 
   




    return <>


        <View style={style.div}>

            <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 30 }}>
                <TouchableOpacity
                    onPress={() => setStep(step - 1)}
                    disabled={step === 1}>
                    <Image source={require('../../../../assets/setagreen.png')} style={{ width: 15, height: 21}} />
                </TouchableOpacity>
                {getProgress()}
                <View style={style.steps}>
                    {Steps.map((item) => (
                        <Step key={item} index={item} active={step === item} >
                            <Text>{item}</Text>
                        </Step>
                    ))}
                </View>
            </View>
        </View>
        <View style={style.box}>
            {getScreens()}
        </View>
        
        <View style={style.delimiter} >
         {getButton()}
        </View>
        

    </>
}

const style = StyleSheet.create({
    div: {
        marginLeft: "5%",
        marginTop: "5%",
        width: "90%",
        height: "15%",


    },
    check: {
        width: 27,
        height: 30,
    },
    box: {
        height: "35%",
        marginLeft: "5%",
        width: "90%",

    },
    delimiter: {
        width: "100%",
        height: "30%",

        alignItems: "center",
        marginTop: "40%"
    },
    line: {
        width: "90%",
        marginLeft: "5%",
        height: 12,
        backgroundColor: "black",
    },
    steps: {
        width: "80%",
        marginLeft: "12%",
        flexDirection: "row",
        justifyContent: "space-between"
    }

});