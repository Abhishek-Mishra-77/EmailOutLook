import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDzBtZcjDiq0y3Uk-M-455EVeokMEikWBw",
    authDomain: "mailhub-e9639.firebaseapp.com",
    projectId: "mailhub-e9639",
    storageBucket: "mailhub-e9639.appspot.com",
    messagingSenderId: "449151968663",
    appId: "1:449151968663:web:fbca75a3dc776d3799d0d2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider };