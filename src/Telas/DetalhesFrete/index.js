import React, {useEffect} from 'react';
import { BackHandler, Alert } from 'react-native';
import Header from './componentes/header';
import Body from './componentes/body';
import Footer from './componentes/footer';


export default function Index ({navigation}){
   useEffect(() =>{
navigation.getParent().setOptions({tabBarStyle:{ display: 'none'} });

   })
   useEffect(() => {
      const comeback = navigation.addListener('beforeRemove', e => {
         navigation.getParent().setOptions({tabBarStyle:{ display: 'flex'} });
         return true;
      })
      return comeback; 
   }, [navigation])
   
    return <> 
    <Header/>
    <Body/>
   <Footer/>
    </>
}