import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import myKey from "../my-key";

const config = {
  apiKey: myKey,
  authDomain: "crwn-db-e8560.firebaseapp.com",
  databaseURL: "https://crwn-db-e8560.firebaseio.com",
  projectId: "crwn-db-e8560",
  storageBucket: "crwn-db-e8560.appspot.com",
  messagingSenderId: "1053203892188",
  appId: "1:1053203892188:web:7c59c7ca115b67ac1cb119",
  measurementId: "G-1PX9L1H8MY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
