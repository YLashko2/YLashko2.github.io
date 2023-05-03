import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAWHOQmFmsqzl6KuzcG3xDtb589E47fl0g",
    authDomain: "bilets-aeb1e.firebaseapp.com",
    projectId: "bilets-aeb1e",
    storageBucket: "bilets-aeb1e.appspot.com",
    messagingSenderId: "585163155500",
    appId: "1:585163155500:web:d7f887a14e0d07ed974989",
    measurementId: "G-K5PKHKN72D"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { auth, app };
export default firestore;
