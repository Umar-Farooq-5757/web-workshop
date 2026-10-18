import "./App.css";
import BlockRenderer from "./components/BlockRenderer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAppContext } from "./context/AppContext";

function App() {
  const { isSidebarOpen, page } = useAppContext();

  return (
    <div className="flex min-h-screen">
      <aside
        className={`border-r-2 border-[#ddd] transition-all duration-500 ease-in-out overflow-hidden shrink-0 ${isSidebarOpen ? "w-60" : "w-0"}`}>
        <Sidebar />
      </aside>
      <main className="flex-1 min-w-0">
        <Header />
        <div className="py-2 px-10">
          {page?.blocks?.map((block) => (
            <BlockRenderer key={block.id} block={block} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
