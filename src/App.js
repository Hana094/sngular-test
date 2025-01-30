import "./App.css";
import Form from "./Components/Form";
import ResultCalculator from "./Components/Result/ResultCalculator";
import NumberContextProvider from "./Hooks/NumberContext";

function App() {
  return (
    <div className="App">
      <NumberContextProvider>
        <Form />
        <ResultCalculator />
      </NumberContextProvider>
    </div>
  );
}

export default App;
