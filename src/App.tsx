import "./App.css";
import BlockRenderer from "./components/BlockRenderer";
import Header from "./components/Header";
import { useAppContext } from "./context/AppContext";

function App() {
  const { developer, page } = useAppContext();
  console.log(developer);
  console.log(page);
  return (
    <>
      <Header />
      {page.blocks.map((block,idx)=>{
        return (
          <BlockRenderer block={block}/>
        )
      })}
    </>
  );
}

export default App;
