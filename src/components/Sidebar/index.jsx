import React from 'react';

import SidebarChats from '../SidebarChats';
import SidebarHeader from '../SidebarHeader';

function Sidebar({ setUserChat, userChat }) {
  return (
    <div className='w-[35%] max-w-[415px] h-[100vh] border-r-[1px] border-[#ddd]'>
      <SidebarHeader setUserChat={setUserChat} userChat={userChat} />
      <SidebarChats setUserChat={setUserChat} />
    </div>
  );
}

export default Sidebar;
