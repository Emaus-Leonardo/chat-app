import React from "react";

import { MdDonutLarge, MdMoreVert, MdChat } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

function SidebarHeader() {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("user", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailInput = prompt("Escreva o e-mail desejado");

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("Email inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe");
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return chatsSnapshot?.docs.some((chat) =>
      chat.data().users.includes(emailChat)
    );
  };

  return (
    <div className="h-[59px] bg-[#f0f2f5] px-4 py-2 flex items-center justify-between mb-[5px] shadow-sm">
      <img
        className="w-[35px] h-[35px] cursor-pointer rounded-[50%]"
        src={user?.photoURL}
        alt="User Avatar"
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />

      <div className="flex gap-[10px]">
        <MdDonutLarge className="w-[24px] h-[24px] bg-[#54656f] cursor-pointer" />
        <MdChat
          onClick={handleCreateChat}
          className="w-[24px] h-[24px] bg-[#54656f] cursor-pointer"
        />
        <MdMoreVert className="w-[24px] h-[24px] bg-[#54656f] cursor-pointer" />
      </div>
    </div>
  );
}

export default SidebarHeader;