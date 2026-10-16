import { createContext, useContext, useState, type ReactNode } from "react";
import type { BaseBlock, Page } from "../types/builder";

interface AppContextType {
  developer: string;
  page: Page;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [developer] = useState("umarfarooq");
  const blocks: BaseBlock[] = [
    {
      id: "321",
      type: "heading",
      content: {
        text: "this is heading level 2",
        level: 2,
      },
      styles: {
        color: "red",
        // fontSize: "30px",
      },
    },
    {
      id: "1234",
      type: "paragraph",
      content: {
        text: "this is paragraph",
      },
      styles: {
        color: "green",
        fontSize: "17px",
      },
    },
  ];
  const page: Page = {
    id: "123",
    title: "this is page title",
    blocks,
  };

  return (
    <AppContext.Provider
      value={{
        developer,
        page,
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
