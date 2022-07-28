import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyDRojU1MMpz0Fh-vdro9K2gZZXyQIdnmiM",
  authDomain: "react-ecommerce-4b068.firebaseapp.com",
  projectId: "react-ecommerce-4b068",
  storageBucket: "react-ecommerce-4b068.appspot.com",
  messagingSenderId: "38025402855",
  appId: "1:38025402855:web:6b12c3e94147c5384c4542",
  measurementId: "G-ZXKZZ85HCB"
};
firebase.initializeApp(config)
export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase