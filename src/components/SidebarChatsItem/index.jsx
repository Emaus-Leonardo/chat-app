import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { MdPerson } from "react-icons/md";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";

const getUser = (users, userLogged) => 
  users?.filter((user) => user !== userLogged?.email)[0];

function SidebarChatsItem({ id, users, user, setUserChat, active }) {
  const chatUser = getUser(users, user);
  const [value, loading, error] = useCollection(
    query(collection(db, "users"), where("email", "==", chatUser))
  );

  const Avatar = value?.docs?.[0]?.data();
  
  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: chatUser?.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
  };

  return (
    <div
      onClick={handleNewChat}
      className={`flex items-center py-3 px-4 cursor-pointer hover:bg-[#f0f2f5] ${active ? 'bg-gray-200' : ''} border-b border-gray-300`}
    >
      {loading ? (
        <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
      ) : Avatar?.photoURL ? (
        <img src={Avatar.photoURL} alt="Avatar" className="w-8 h-8 rounded-full" />
      ) : (
        <MdPerson className="w-8 h-8 p-[3px] text-gray-500 bg-gray-300 rounded-full" />
      )}
      <div className="ml-3">
        <p className="text-gray-800 font-medium">{chatUser?.split("@")[0]}</p>
      </div>
    </div>
  );
}

export default SidebarChatsItem;

