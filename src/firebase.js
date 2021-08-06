import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBFVrzJuuOfz4sEItxoJwoTDwWd0k2AIBg",
    authDomain: "twitter-clone-2a235.firebaseapp.com",
    projectId: "twitter-clone-2a235",
    storageBucket: "twitter-clone-2a235.appspot.com",
    messagingSenderId: "824542554187",
    appId: "1:824542554187:web:5ecd6b5f1b92dfd3e8c5ce",
    measurementId: "G-QH4HPESD7E"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;