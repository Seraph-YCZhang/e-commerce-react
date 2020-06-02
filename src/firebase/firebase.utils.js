import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLnmwrmdL0G_u9d9QBTO4Cc_4OoUbQKWs",
    authDomain: "crwn-ecommerce-db-d6aed.firebaseapp.com",
    databaseURL: "https://crwn-ecommerce-db-d6aed.firebaseio.com",
    projectId: "crwn-ecommerce-db-d6aed",
    storageBucket: "crwn-ecommerce-db-d6aed.appspot.com",
    messagingSenderId: "30944071233",
    appId: "1:30944071233:web:63f802627811ae686040c0",
    measurementId: "G-TTK966XJ3V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

