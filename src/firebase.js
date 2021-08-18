import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx26RP9ZIaUuhP-rjdt45pjooP2P_OOPA",
  authDomain: "clone-15917.firebaseapp.com",
  databaseURL: "https://clone-15917.firebaseio.com",
  projectId: "clone-15917",
  storageBucket: "clone-15917.appspot.com",
  messagingSenderId: "459894643705",
  appId: "1:459894643705:web:a41e7b9f36851b11c17b28",
  measurementId: "G-X1RN5YG10E"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };