import React from 'react';
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from "../SidebarChatsItem";
import { collection, query, where } from "firebase/firestore";

function SidebarChats({ setUserChat, userChat }) {
  const [user] = useAuthState(auth);

  if (!user) {
    console.error("Usuário não está autenticado");
    return null;
  }

  const refChat = query(
    collection(db, "chats"),
    where("users", "array-contains", user.email)
  );

  const [chatsSnapshot] = useCollection(refChat);

  return (
    <div>
      <div className='h-[calc(100vh+70px)] overflow-y-auto'>
        <div className='my-0 mx-[10px] border-t-[1px] border-t-[#ddd]'>
          {chatsSnapshot?.docs.map(chat => (
            <SidebarChatsItem
              key={chat.id}
              id={chat.id}
              users={chat.data().users}
              user={user}
              setUserChat={setUserChat}
              active={userChat?.chatId === chat.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarChats;
