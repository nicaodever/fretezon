import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    AuthErrorCodes, sendPasswordResetEmail
} from "firebase/auth";
import {
    collection, addDoc, getDocs, doc, updateDoc, deleteDoc,
    query, where, onSnapshot
} from "firebase/firestore";


export async function salvarCliente(data) {
    try {
        await addDoc(collection(db, 'Cliente'), data)
        return 'ok'
    } catch (error) {
        return 'erro'
    }
}

export async function pegarCliente() {
    try {
        const querySnapshot = await getDocs(collection(db, "Cliente"));
        let clintes = []
        querySnapshot.forEach((doc) => {
            let cliente = { id: doc.id, ...doc.data() }
            clintes.push(cliente)
        });
        return clintes
    } catch (error) {
        console.log(error)
        return []
    }

}

export async function login(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log(userCredential)
            return "sucesso"
        })
        .catch(() => {
            return "Erro"
        });
    return resultado
}



export async function salvarFretes(data) {
    try {
        await addDoc(collection(db, 'fretes'), data)
        return 'ok'
    } catch (error) {
        console.log('error ao add produto:', error)
        return 'erro'
    }
}

export async function pegarFretes() {
    try {
        const querySnapshot = await getDocs(collection(db, "fretes"));
        let fretes = []
        querySnapshot.forEach((doc) => {
            let frete = { id: doc.id, ...doc.data() }
            fretes.push(frete)
        });
        return fretes
    } catch (error) {
        console.log(error)
        return []
    }

}


export async function fretesTempoReal(setFretes) {
    const ref = query(collection(db, "fretes"))
    onSnapshot(ref, (querySnapshot) => {
        const fretes = []
        querySnapshot.forEach((doc) => {
            fretes.push({ id: doc.id, ...doc.data() })
        })
        setFretes(fretes)
    })
}

export async function AtualizarFretes(freteId, data) {
    try {
        const freteRef = doc(db, "fretes", freteId);
        await updateDoc(freteRef, data)
        return 'ok'
    }
    catch (error) {
        console.log(console.error);
        return 'error'
    }
}
export async function deletarFretes(freteId) {
    try {
        const freteRef = doc(db, "fretes", freteId);
        await deleteDoc(freteRef)
        return 'ok'
    }
    catch (error) {
        console.log(console.error);
        return 'error'
    }
}

function errosFirebase(error) {
    let mensagem = '';
    switch (error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
            mensagem = "Esse email já está em uso";
            break;
        case AuthErrorCodes.INVALID_EMAIL:
            mensagem = "Email inválido";
            break;
        case AuthErrorCodes.WEAK_PASSWORD:
            mensagem = "A senha precisa de no minimo 6 caracteres";
            break;
        case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
            mensagem = "Limite de requisições excedido, tente novamente outra hora";
            break;
        default:
            mensagem = "Erro desconhecido"
    }
    return mensagem;
}

