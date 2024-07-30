import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ7i8CAJcX1MgmZQ8Am1ZuZB-71bH9LFY",
  authDomain: "chat-app-e8021.firebaseapp.com",
  projectId: "chat-app-e8021",
  storageBucket: "chat-app-e8021.appspot.com",
  messagingSenderId: "968508336077",
  appId: "1:968508336077:web:fd1f80f419faab56990684",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
