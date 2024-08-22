import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ7i8CAJcX1MgmZQ8Am1ZuZB-71bH9LFY",
  authDomain: "chat-app-e8021.firebaseapp.com",
  projectId: "chat-app-e8021",
  storageBucket: "chat-app-e8021.appspot.com",
  messagingSenderId: "968508336077",
  appId: "1:968508336077:web:fd1f80f419faab56990684",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
