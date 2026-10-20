import "./App.css";
import BlockRenderer from "./components/BlockRenderer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAppContext } from "./context/AppContext";

function App() {
  const { isSidebarOpen, page } = useAppContext();

  return (
    <div className="flex h-screen overflow-hidden bg-[#111] text-white">
      <aside
        className={`border-r-2 border-[#222] transition-all duration-500 ease-in-out shrink-0 ${isSidebarOpen ? "w-60" : "w-0"} overflow-hidden`}>
        <Sidebar />
      </aside>
      <main className="flex-1 min-w-0 overflow-y-auto">
        <Header />
        <div className="py-3 px-10">
          <div className="flex items-center justify-between">
            <p>Your Webpage:</p>
            <button className="bg-[#222] border border-[#333] py-1 px-3 cursor-pointer hover:opacity-70">
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
    </div>
  );
}

export default App;
