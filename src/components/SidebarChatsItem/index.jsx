import React from "react";
import { MdPerson } from "react-icons/md";

function SidebarChatsItem({ id, users, user, setUserChat, active }) {
  const chatUser = users?.filter((email) => email !== user?.email)[0];

  const getUser = (users, userLogged) =>
    users?.filter((user) => user !== userLogged?.email)[0];

    const Avatar = getUserItem?.docs?.[0]?.data();
    const item = getUser(users, user)

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item?.split("@")[0],
      photoURL: Avatar?.photoURL, 
    };

    setUserChat(userChat);
  };

  return (
    <div
      onClick={handleNewChat}
      className={`flex items-center justify-start py-[15px] px-[20px] cursor-pointer hover:bg-[#f0f2f5] ${active ? 'bg-gray-200' : ''}`}
    >
      <MdPerson className="w-8 h-8 text-gray-500" />
      <div className="ml-4">
        <p className="text-gray-700 font-medium">{chatUser?.split("@")[0]}</p>
      </div>
    </div>
  );
}

export default SidebarChatsItem;
