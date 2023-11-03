import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import { getFirestore } from 'firebase/firestore';

import{
   API_KEY,
   AUTH_DOMAIN,
   DATABASE_URL,
   PROJECT_ID,
   STORAGE_BUCKET,
   MESSAGING_SENDER_ID,
   APP_ID
  } from "@env";

  const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
  };

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

const db = getFirestore(app);
export { db, auth };


