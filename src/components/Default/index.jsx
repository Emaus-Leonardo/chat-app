import React from "react";
import { MdMessage } from "react-icons/md";

function Default() {
  return (
    <div className="w-full flex bg-[#f8f8f8] items-center justify-center flex-col gap-[20px] p-[20px]">
      <MdMessage size={100}  style={{ color: "#ff81a9" }} />
      <h1>Chat App</h1>
      <p>Selecione um chat para começar a conversar!</p>
    </div>
  );
}

export default Default;
