import { Diagram } from "./components/Diagram";
import { Search } from "./components/Search";
import { StockProvider } from "./Context";

function App() {
  return (
    <StockProvider>
      <div className="App">
        <Search />
        <Diagram />
      </div>
    </StockProvider>
  );
}

export default App;
