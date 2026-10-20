import type React from "react";
import ElementEditor from "./ElementEditor";
import { useAppContext } from "../context/AppContext";
import LayoutEditor from "./LayoutEditor";

const Sidebar: React.FC = () => {
  const { selectedEditor, setSelectedEditor } = useAppContext();

  return (
    <div className="h-full overflow-y-auto py-3 w-70">
      <h2 className="font-semibold text-xl px-4">Editor</h2>
      <div className="h-0.5 w-full bg-[#222] my-3"></div>
      <div className="flex items-center justify-evenly">
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
      <div className="mt-3">
        {selectedEditor === "element" && <ElementEditor />}
        {selectedEditor === "layout" && <LayoutEditor />}
      </div>
    </div>
  );
};

export default Sidebar;
