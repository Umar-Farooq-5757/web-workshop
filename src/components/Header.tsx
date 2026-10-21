import type React from "react";
import { FaGithub } from "react-icons/fa";
import { VscLayoutSidebarRightOff } from "react-icons/vsc";
import { useAppContext } from "../context/AppContext";
import SpookyCheckbox from "./SpookyCheckbox";

const Header: React.FC = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  return (
    <header className="border-b-2 border-[#222] px-3 py-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="hover:bg-[#333] rounded-full p-2 transition-all">
          <VscLayoutSidebarRightOff />
        </button>
        <h1 className="text-3xl font-extrabold">Web Workshop</h1>
      </div>
      <div className="flex items-center gap-2">
        <SpookyCheckbox />
        <button
          onClick={() =>
            window.open("https://github.com/umar-farooq-5757/web-workshop")
          }
          className="hover:bg-[#333] p-1.5 rounded-md cursor-pointer">
          <FaGithub className="size-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
