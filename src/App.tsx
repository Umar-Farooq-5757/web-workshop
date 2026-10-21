import "./App.css";
import BlockRenderer from "./components/BlockRenderer";
import ExportHtml from "./components/ExportHtml";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SpookyOverlay from "./components/SpookyOverlay";
import { useAppContext } from "./context/AppContext";

function App() {
  const {
    isSidebarOpen,
    page,
    isExportHtmlOpen,
    setIsExportHtmlOpen,
    isSpookyMode,
  } = useAppContext();

  return (
    <div
      style={{ fontFamily: isSpookyMode ? "Creepster" : "" }}
      className="flex h-screen overflow-hidden bg-[#111] text-white">
      <aside
        className={`border-r-2 border-[#222] transition-all duration-500 ease-in-out shrink-0 ${isSidebarOpen ? "w-70" : "w-0"} overflow-hidden`}>
        <Sidebar />
      </aside>
      <main className="flex-1 min-w-0 overflow-y-auto">
        <Header />
        <div className="py-3 px-10">
          <div className="flex items-center justify-between">
            <p>Your Webpage:</p>
            <button
              onClick={() => setIsExportHtmlOpen(true)}
              className="bg-[#222] border border-[#333] py-1 px-3 cursor-pointer hover:opacity-70">
              Export HTML
            </button>
          </div>
          <div className="border border-[#444] mt-4 p-3">
            {page?.blocks?.map((block) => (
              <BlockRenderer key={block.id} block={block} />
            ))}
          </div>
        </div>
      </main>
      {isExportHtmlOpen && <ExportHtml />}
      <SpookyOverlay />
    </div>
  );
}

export default App;
