import type React from "react";
import ElementEditor from "./ElementEditor";
import { useAppContext } from "../context/AppContext";
import LayoutEditor from "./LayoutEditor";

const Sidebar: React.FC = () => {
  const { selectedEditor, setSelectedEditor } = useAppContext();
  return (
    <div className="py-3">
      <h2 className="font-semibold text-xl px-4">Editor</h2>
      <div className="h-0.5 w-full bg-[#222] my-3"></div>
      <div className="flex items-center justify-evenly gap-">
        <button
          onClick={() => setSelectedEditor("element")}
          className={`${selectedEditor === "element" && "border-b-3"} cursor-pointer hover:opacity-70`}>
          Element
        </button>
        <button
          onClick={() => setSelectedEditor("layout")}
          className={`${selectedEditor === "layout" && "border-b-3"} cursor-pointer hover:opacity-70`}>
          Layout
        </button>
      </div>
      {selectedEditor === "element" && <ElementEditor />}
      {selectedEditor === "layout" && <LayoutEditor />}
    </div>
  );
};

export default Sidebar;
