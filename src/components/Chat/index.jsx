import React from 'react';

import ChatHeader from "../ChatHeader/index";
import ChatBody from "../ChatBody/index";
import ChatFooter from "../ChatFooter/index";
import Default from "../Default/index"

const Chat = ({ userChat }) => {
    if (!userChat) return <Default/>;

  return (
    <div className='flex flex-col w-full'>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} /> 
    </div>
  );
};

export default Chat;
