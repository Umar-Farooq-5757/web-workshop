import React from "react";
import { useAppContext } from "../context/AppContext";

const SpookyCheckbox: React.FC = () => {
  const { isSpookyMode, setIsSpookyMode } = useAppContext();

  return (
    <div className="py-1 px-2">
      <label
        title="Enable creaking door sound and creepy text"
        className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isSpookyMode}
          onChange={() => setIsSpookyMode(!isSpookyMode)}
        />
        <span className="ml-3 text-sm font-medium">Enable spooky mode</span>
      </label>
    </div>
  );
};

export default SpookyCheckbox;
