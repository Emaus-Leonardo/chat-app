import React from "react";
import { auth, provider } from "../../services/firebase";

const Login = () => {
  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // Aqui você pode acessar o usuário autenticado
        const user = result.user;
        console.log("Usuário autenticado:", user);
        // Redirecionar ou fazer outra ação após o login
      })
      .catch((error) => {
        console.error("Erro ao autenticar:", error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
