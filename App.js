import React from "react";
import { StatusBar, View, Text} from 'react-native';
import{ useFonts } from 'expo-font';

import AppRotas from './src/rotas/AppRotas';
import Teste from "./src/Testes/index";
import CorridaAceita from "./src/Telas/CorridaAceita";


export default function App() {     

  const [fontsLoaded] = useFonts({
    Arimo: require("./assets/fonts/Arimo-Regular.ttf"),
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf") ,
    Inter: require("./assets/fonts/Inter-Medium.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    Roboto: require("./assets/fonts/Roboto-Regular.ttf") ,
    RobotoBold: require("./assets/fonts/Roboto-Medium.ttf") ,
    PoppinsBold: require("./assets/fonts/Poppins-BoldItalic.ttf"),

  });
  if (!fontsLoaded) return null;
  return (
  <View style={{flex: 1 , backgroundcolor:"white"}}>
       <StatusBar/>
       <AppRotas/>
    </View>
    
  );

}







