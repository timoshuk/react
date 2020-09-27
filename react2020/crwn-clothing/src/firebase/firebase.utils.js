import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import myKey from "../config";

const config = {
  apiKey: myKey.firebaseKey,
  authDomain: "crwn-db-e8560.firebaseapp.com",
  databaseURL: "https://crwn-db-e8560.firebaseio.com",
  projectId: "crwn-db-e8560",
  storageBucket: "crwn-db-e8560.appspot.com",
  messagingSenderId: "1053203892188",
  appId: "1:1053203892188:web:7c59c7ca115b67ac1cb119",
  measurementId: "G-1PX9L1H8MY",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
