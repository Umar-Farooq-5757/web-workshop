import "./App.css";
import BlockRenderer from "./components/BlockRenderer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAppContext } from "./context/AppContext";

function App() {
  const { developer, isSidebarOpen, page } = useAppContext();
  console.log(developer);
  console.log(page);
  return (
    <div className="flex min-h-screen">
      <div
        style={{ width: isSidebarOpen ? "15rem" : "0rem" }}
        className="border-r-2 border-[#ddd] transition-all duration-500 ease-in-out overflow-hidden">
        <Sidebar />
      </div>
      <div className="grow">
        <Header />
        <div className="py-2 px-10">
          {page.blocks.map((block) => {
            return <BlockRenderer key={block.id} block={block} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
