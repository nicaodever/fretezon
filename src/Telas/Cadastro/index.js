import { View } from "react-native";
import Header from '../Cadastro/componetes/header';
import Body from '../Cadastro/componetes/body';

export default function Main(){

   return <>
    <View style={{ backgroundColor:"white"}}>
    <Header/>
    <Body/>
    </View>
   </>
}