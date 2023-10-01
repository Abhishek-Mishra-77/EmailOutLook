import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAg5d2GARlwe902pzQwKCEPFdKgS_mGKfw",
    authDomain: "react-1-c95e5.firebaseapp.com",
    databaseURL: "https://react-1-c95e5-default-rtdb.firebaseio.com",
    projectId: "react-1-c95e5",
    storageBucket: "react-1-c95e5.appspot.com",
    messagingSenderId: "897677202705",
    appId: "1:897677202705:web:e4a18a56bd0f37f6b8a8b0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider };


