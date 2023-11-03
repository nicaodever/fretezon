import react,{useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text } from 'react-native';


//App agendar:
import Home from '../Telas/Home';
import Fullmap from '../Telas/Home/Fullmap';
import Agendado from '../Telas/Agendando/inicial';
import Meio from '../Telas/Agendando/detalhes';
import Finalizar from '../Telas/Agendando/finalizar';
import FormadePagamento from "../Telas/FormadePagamento";
import Adicionar from "../Telas/FormadePagamento/adicionar";

//App rotas:
import Registros from "../Telas/Registros";
import Conta from "../Telas/Conta";

//App atividades:
import Detalhes from '../Telas/DetalhesFrete/index';

//App inical:
import Login from "../Telas/Login";
import Cadastro from "../Telas/Cadastro/index";
import Multistep from "../Telas/Cadastro/etapas/main";
import Concluido from "../Telas/Cadastro/etapas/Final";

//appPedido:
import Crud from '../Telas/CrudPedido/index';
import Pedido from "../Telas/Pedido/index";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Atividades(){
    return<>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
       <Stack.Screen name='registro' component={Registros}/>
        <Stack.Screen name='atividade' component={Detalhes}/>
    </Stack.Navigator>
    </>
}
function AppAgendar(){
    return<>
    <View style={{flex: 1}}>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
     <Stack.Screen name='home' component={Home}/>
     <Stack.Screen name='agendar' component={Agendado}/>
     <Stack.Screen name='fullmap' component={Fullmap}/>
     <Stack.Screen name='detalhes' component={Meio}/>
     <Stack.Screen name='pagamento' component={FormadePagamento}/>
     <Stack.Screen name='adicionar' component={Adicionar}/>
     <Stack.Screen name='finalizar' component={Finalizar}/>
    </Stack.Navigator>
    </View>
  

    </>
}
function AppPedido(){
    return <>
     <View style={{flex: 1}}>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
     <Stack.Screen name='pedido' component={Pedido}/>
     <Stack.Screen name='crud' component={Crud}/>
    </Stack.Navigator>
    </View>
    </>
}
function  Approtas(){
    return (
        <View style={{flex: 1}}> 
       <Tab.Navigator
       screenOptions={{ headerShown: false}}
       tabBarOptions={{
           showLabel: false,
           tabBarStyle:{
               borderTop: 0,
               position:"absolute",
               bottom: 0,
               height: 400,
           },
       }}>
         <Tab.Screen 
         style={{
           position: "absolute",
           width:"100%",
           bootom: 0,
         }}
          name='Home' 
          component={AppAgendar}
           options={{
           headerShown: false,
           headerTransparent: true,
           tabBarIcon: ({focused}) => (
               <View  style={{ alignItems: 'center',width: 80, borderTopColor: focused ? '#21CA83' :'#fff',marginRight:0, borderTopWidth: 2  }}>
                   <Image source={require('../../assets/home.png')}
                   style={{
                       tintColor: focused ? '#21CA83' : '#000000', marginTop: 5,
                   }}  />
                   <Text 
                   style={{
                       color: focused ? '#21CA83' : '#000000', fontSize:10, marginTop: 4, fontFamily: "Roboto",
                   }} > Home</Text>
               </View>
           ),
         }}
         />
              <Tab.Screen 
         name='Pedido'
          options={{
           headerShown: false,
         
           tabBarIcon: ({focused}) => (
               <View style={{ alignItems: 'center',width: 80, borderTopColor: focused ? '#21CA83' :'#fff', borderTopWidth: 2  }}>
                   <Image source={require('../../assets/Pedido.png')}
                   resizeMode = "contain"
                   style={{
                       tintColor: focused ? '#21CA83' : '#000000', marginTop:5,
                   }}  />
                   <Text 
                   style={{
                       color: focused ? '#21CA83' : '#000000', fontSize: 10,marginTop: 4, fontFamily: "Roboto",
                   }} > Pedido</Text>
               </View>
           ),
         }}
          component={AppPedido}/>
         <Tab.Screen 
         name='Registro'
          options={{
           headerShown: false,
         
           tabBarIcon: ({focused}) => (
               <View style={{ alignItems: 'center', width: 80,borderTopColor: focused ? '#21CA83' :'#fff', borderTopWidth: 2  }}>
                   <Image source={require('../../assets/registro.png')}
                   resizeMode = "contain"
                   style={{
                       tintColor: focused ? '#21CA83' : '#000000', marginTop:5,
                   }}  />
                   <Text 
                   style={{
                       color: focused ? '#21CA83' : '#000000', fontSize:10,marginTop: 4, fontFamily: "Roboto",
                   }} >Registro</Text>
               </View>
           ),
         }}
          component={Atividades}/>
          <Tab.Screen 
         name='Conta'
          options={{
           headerShown: false,   
           tabBarIcon: ({focused}) => (
               <View style={{ alignItems: 'center',width: 80, borderTopColor: focused ? '#21CA83' :'#fff', borderTopWidth: 2  }}>
                   <Image source={require('../../assets/Conta.png')}
                   resizeMode = "contain"
                   style={{
                       tintColor: focused ? '#21CA83' : '#000000', marginTop:5,
                   }}  />
                   <Text 
                   style={{
                       color: focused ? '#21CA83' : '#000000', fontSize:10,marginTop: 4, fontFamily: "Roboto",
                   }} > Conta</Text>
               </View>
           ),
         }}
          component={Conta}/>
       
       </Tab.Navigator>
    
     </View>    
        );
    
}
function AppGeral(){
    return(
 <View style={{flex: 1}}>
    <NavigationContainer  independent={true}>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
       <Stack.Screen name='primeira' component={Login}/>
        <Stack.Screen name='home' component={Approtas}/>
        <Stack.Screen name='cadastro' component={Cadastro}/>
        <Stack.Screen name='etapas' component={Multistep}/>
        <Stack.Screen name='concluido' component={Concluido}/>

    </Stack.Navigator>
    </NavigationContainer>
    
    </View>
   );
}



export default function App(){
    return<>
    <NavigationContainer>
    <AppGeral/>
    </NavigationContainer>
    </>
}
