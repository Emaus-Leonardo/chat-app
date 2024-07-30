import React from "react";
import { auth, provider } from "../../services/firebase";
import Aside from "../../assets/blossom.png";

export default function Login() {
  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log("Usuário autenticado:", user);
      })
      .catch((error) => {
        console.error("Erro ao autenticar:", error);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <div className="flex justify-center items-center bg-[#F8F8F8] rounded-[30px] shadow-lg overflow-hidden gap-7">
        <aside className="flex justify-start items-start">
          <img
            src={Aside}
            alt="blossom-aside"
            className="rounded-s-[30px] object-contain max-h-full"
          />
        </aside>

        <div className="h-full flex flex-col">
          <div className="flex flex-col justify-start items-start relative">
            <h1 className="text-[60px] font-roboto font-bold leading-tight pr-24 pt-10 bg-clip-text text-transparent bg-gradient-to-b from-[#BFDFEE] to-[#DBAFB3]">
              Sign in <br /> with Google
            </h1>

            <p className="font-roboto text-[14px] font-semibold text-black absolute top-[180px] left-2">
              Let's chat together!
            </p>
          </div>

          <div className="h-full flex justify-center items-center pr-7">
            <button
              onClick={signInWithGoogle}
              className="flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-[#f5f5f5] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-3"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Continue with Google!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
