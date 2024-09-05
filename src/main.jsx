import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase.js";
import ReactDOM from "react-dom/client";

import Login from "./components/Login/index.jsx";
import Loading from "./components/Loading/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import Chat from "./components/Chat/index.jsx";

import "./index.css";

import { doc, getDoc, setDoc } from "firebase/firestore";

function App() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null); 

  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, "users", user.uid);

      getDoc(userDocRef)
        .then((docSnap) => {
          if (!docSnap.exists()) {
            setDoc(userDocRef, {
              email: user.email,
              photoURL: user.photoURL,
            });
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar ou criar documento do usuário:", error);
        });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <div className="app-container flex h-screen">
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
