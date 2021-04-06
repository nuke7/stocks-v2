import { Diagram } from "./components/Diagram";
import { Search } from "./components/Search";
import { StockProvider } from "./Context";
import "./App.css";

function App() {
  return (
    <StockProvider>
      <div className="App">
        <h1>Stock Search App</h1>
        <Search />
        <Diagram />
      </div>
    </StockProvider>
  );
}

export default App;
