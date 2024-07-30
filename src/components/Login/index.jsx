import React from "react";
import { auth, provider } from "../../services/firebase";

export default function Login() {
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
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-[1100px] h-[609px] flex justify-center items-center bg-[#F8F8F8]">
        <aside className=""></aside>

        <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Sign in with Google</h1>
          <p className="mb-6">Let's chat together.</p>
          <button
            onClick={signInWithGoogle}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
          >
            Continue with Google!
          </button>
        </div>
      </div>
    </div>
  );
}
