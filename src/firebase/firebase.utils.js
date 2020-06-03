import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCffKjnnZ6sMHaPp-Af7bRWrvNKtd-CoEc",
  authDomain: "crown-db-ef42c.firebaseapp.com",
  databaseURL: "https://crown-db-ef42c.firebaseio.com",
  projectId: "crown-db-ef42c",
  storageBucket: "crown-db-ef42c.appspot.com",
  messagingSenderId: "767018437471",
  appId: "1:767018437471:web:dfb9400dd25463947504ea",
  measurementId: "G-EYCZQH7PQW",
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

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
