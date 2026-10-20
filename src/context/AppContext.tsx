import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { BaseBlock, BaseStyles, Page } from "../types/builder";

interface SelectedBlockUpdate {
  content?: Partial<
    | { text: string; level?: 1 | 2 | 3 | 4 | 5 | 6 }
    | { text: string }
    | { src: string; alt?: string }
    | { text: string; url?: string }
  >;
  styles?: Partial<BaseStyles>;
}

interface AppContextType {
  developer: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  selectedBlock: BaseBlock | null;
  setSelectedBlock: Dispatch<SetStateAction<BaseBlock | null>>;
  selectedEditor: "layout" | "element";
  setSelectedEditor: Dispatch<SetStateAction<"layout" | "element">>;
  page: Page;
  setPage: Dispatch<SetStateAction<Page>>;
  activateBlock: (blockId: string) => void;
  updateSelectedBlock: (update: SelectedBlockUpdate) => void;
  isExportHtmlOpen: boolean;
  setIsExportHtmlOpen: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [developer] = useState("umarfarooq");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [selectedBlock, setSelectedBlock] = useState<BaseBlock | null>(null);
  const [isExportHtmlOpen, setIsExportHtmlOpen] = useState<boolean>(false);
  const [selectedEditor, setSelectedEditor] = useState<"layout" | "element">(
    "element",
  );

  const [page, setPage] = useState<Page>(() => ({
    id: "page-id",
    title: "this is page title",
    blocks: [
      {
        id: crypto.randomUUID(),
        type: "heading",
        content: {
          text: "this is heading level 2",
          level: 2,
        },
        styles: {
          color: "red",
        },
      },
      {
        id: crypto.randomUUID(),
        type: "paragraph",
        content: {
          text: "this is paragraph",
        },
        styles: {
          color: "green",
          fontSize: "17px",
          textAlign: "center",
        },
      },
      {
        id: crypto.randomUUID(),
        type: "image",
        content: {
          src: "https://user-cdn.hackclub-assets.com/01a14423-1e9e-7221-9fe5-7d6344dc6acf/journal-1792144514325.png",
        },
        styles: {},
      },
    ],
  }));

  const activateBlock = (blockId: string) => {
    const block =
      page.blocks.find((currentBlock) => currentBlock.id === blockId) ?? null;
    setSelectedBlock(block);
  };

  const updateSelectedBlock = (update: SelectedBlockUpdate) => {
    if (!selectedBlock) return;

    const updatedBlock: BaseBlock = {
      ...selectedBlock,
      content: {
        ...selectedBlock.content,
        ...(update.content ?? {}),
      },
      styles: {
        ...selectedBlock.styles,
        ...(update.styles ?? {}),
      },
    } as BaseBlock;

    setSelectedBlock(updatedBlock);

    setPage((currentPage) => ({
      ...currentPage,
      blocks: currentPage.blocks.map((block) =>
        block.id === updatedBlock.id ? updatedBlock : block,
      ),
    }));
  };

  return (
    <AppContext.Provider
      value={{
        developer,
        isSidebarOpen,
        setIsSidebarOpen,
        selectedBlock,
        setSelectedBlock,
        selectedEditor,
        setSelectedEditor,
        page,
        setPage,
        activateBlock,
        updateSelectedBlock,
        isExportHtmlOpen,
        setIsExportHtmlOpen,
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
