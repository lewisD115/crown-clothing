import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC-RyKgh4goJT3Ld1CKKsJ6_itWV_yurMo",
  authDomain: "crwn-db-aa770.firebaseapp.com",
  projectId: "crwn-db-aa770",
  storageBucket: "crwn-db-aa770.appspot.com",
  messagingSenderId: "872547110804",
  appId: "1:872547110804:web:0e346bfc9887cf96794981",
  measurementId: "G-B4X7E7S7CD"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;