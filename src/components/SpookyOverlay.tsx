import type React from "react";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

const SpookyOverlay: React.FC = () => {
  const { isSpookyMode } = useAppContext();
  const [showCrackedGlass, setShowCrackedGlass] = useState<boolean>(false);

  useEffect(() => {
    if (isSpookyMode) {
      setShowCrackedGlass(true);
      const timer = setTimeout(() => {
        setShowCrackedGlass(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowCrackedGlass(false);
    }
  }, [isSpookyMode]);

  if (!showCrackedGlass) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      <img
        src="/cracked.webp"
        alt="Cracked Screen"
        className="w-full h-full object-cover opacity-40 mix-blend-screen animate-pulse"
      />
    </div>
  );
};

export default SpookyOverlay;
