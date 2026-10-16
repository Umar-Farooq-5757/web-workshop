import { createContext, useContext, useState, type ReactNode } from "react";

interface AppContextType {
  developer: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [developer] = useState("umarfarooq");

  return (
    <AppContext.Provider
      value={{
        developer,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
};
