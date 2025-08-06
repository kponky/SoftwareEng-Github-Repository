import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
