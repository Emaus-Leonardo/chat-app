import React from "react";

import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

function ChatHeader({ photoURL, name }) {
  return (
    <div className="h-[59px] bg-[#f0f2f5] py-[10px] px-[16px] flex items-center justify-between z-10 shadow-sm">
      <div className="flex items-center">
        {photoURL ? (
          <img
            className="w-[30px] h-[30px] cursor-pointer bg-[#ccc] rounded-full mr-[10px] min-w-fit"
            src={photoURL}
            alt="Avatar"
          />
        ) : (
          <MdPerson className="w-[30px] h-[30px] text-gray-500 rounded-full mr-[10px]" />
        )}
        <div className="grid">
          <span className="text-[18px] overflow-hidden text-ellipsis">
            {name || "Usuário"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[15px]">
        <MdSearch className="cursor-pointer w-[24px] h-[24px]" />
        <MdMoreVert className="cursor-pointer w-[24px] h-[24px]" />
      </div>
    </div>
  );
}

export default ChatHeader;
