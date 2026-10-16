import type React from "react";
import { FaGithub } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="border-b-2 border-[#ddd] px-10 py-2 flex items-center justify-between">
      <h1 className="text-3xl font-extrabold">Web Workshop</h1>
      <button
        onClick={() =>
          window.open("https://github.com/umar-farooq-5757/web-workshop")
        }
        className="hover:bg-[#ddd] p-1.5 rounded-md cursor-pointer">
        <FaGithub className="size-6" />
      </button>
    </header>
  );
};

export default Header;
