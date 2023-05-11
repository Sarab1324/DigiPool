
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCEjAZSiU5R2DljQZkwtJfn20tItiPIA1Q",
  authDomain: "digipool-68664.firebaseapp.com",
  projectId: "digipool-68664",
  storageBucket: "digipool-68664.appspot.com",
  messagingSenderId: "902030158519",
  appId: "1:902030158519:web:99cccc0f293eb912927b32",
  measurementId: "G-P9C9NC95LH"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);