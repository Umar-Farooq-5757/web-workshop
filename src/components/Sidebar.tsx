import type React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="py-3 px-4">
      <h2 className="font-semibold text-xl">Editor</h2>
      <div className="my-5">
        <div className="space-y-1">
          <p className="font-semibold">Text</p>
          <input
            className="border-2 border-[#ddd] rounded-sm py-1 px-2 outline-none"
            type="text"
            placeholder="enter text here..."
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
