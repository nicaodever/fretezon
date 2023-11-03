import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
} from "firebase/auth/react-native";

export async function cadastrar(email, senha){
    createUserWithEmailAndPassword(auth,email, senha)
    .then((userCredential) => {
      console.log(userCredential)
      return "sucesso"
    })
    .catch((error) => {
      console.log(error)
      return "erro"
    });
}

export async function logar(email, senha, confirmarSenha){
  const result= signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    console.log(userCredential)
    return "sucesso"
  })
  .catch((error) => {
    console.log(error)
    return "error"
  });

  return result
}