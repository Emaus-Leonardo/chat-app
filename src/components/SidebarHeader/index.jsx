import React, { useState } from "react";

import { MdDonutLarge, MdMoreVert, MdChat, MdLogout } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where, addDoc } from "firebase/firestore";

function SidebarHeader() {
  const [user] = useAuthState(auth);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!user) {
    console.error("Usuário não está autenticado");
    return null;
  }

  const chatRef = collection(db, "chats");
  const refChat = query(chatRef, where("users", "array-contains", user.email));
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = async () => {
    const emailInput = prompt("Escreva o e-mail desejado");

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("Email inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe");
    }

    await addDoc(chatRef, {
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return chatsSnapshot?.docs.some((chat) =>
      chat.data().users.includes(emailChat)
    );
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="h-[59px] bg-[#f0f2f5] px-4 py-2 flex items-center justify-between mb-[5px] shadow-sm relative">
      <div className="flex items-center gap-[10px] relative">
        <img
          className="w-[35px] h-[35px] cursor-pointer rounded-[50%]"
          src={user?.photoURL}
          alt="User Avatar"
          onClick={toggleMenu}
        />
        <span className="font-semibold">{user?.displayName}</span>

        {menuOpen && (
          <div className="absolute top-[45px] left-0 bg-white shadow-lg rounded-md p-1 z-10">
            <button
              onClick={handleSignOut}
              className="flex items-center w-full text-[14px] text-left px-5 py-1 hover:bg-gray-100 whitespace-nowrap"
            >
              <MdLogout size={16} className="mr-2" />
              Log Out
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-[10px]">
        <MdDonutLarge className="w-[24px] h-[24px] cursor-pointer" />
        <MdChat
          onClick={handleCreateChat}
          className="w-[24px] h-[24px] cursor-pointer"
        />
        <MdMoreVert className="w-[24px] h-[24px] cursor-pointer" />
      </div>
    </div>
  );
}

export default SidebarHeader;
