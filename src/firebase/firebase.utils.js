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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log('error creating user', err.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

