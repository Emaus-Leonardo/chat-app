import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from './services/firebase.js'; 
import ReactDOM from 'react-dom/client';

import Login from './components/Login/index.jsx';
import Loading from './components/Loading/index.jsx';
import Sidebar from "./components/Sidebar/index.jsx"


import './index.css';

function App() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      const userDocRef = db.collection('users').doc(user.uid);

      userDocRef.get().then((doc) => {
        if (!doc.exists) {
          userDocRef.set({
            email: user.email,
            photoURL: user.photoURL,
          });
        }
      });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return <div><Sidebar setUserChat={setUserChat} userChat={userChat} /></div>; 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
