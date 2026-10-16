import "./App.css";
import Header from "./components/Header";
import { useAppContext } from "./context/AppContext";

function App() {
  const { developer } = useAppContext();
  console.log(developer)
  return (
    <>
      <Header />
    </>
  );
}

export default App;
