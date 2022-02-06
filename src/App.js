import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Learn from "./components/Learn/Learn";
import Companions from "./components/Companions/Companions";

function App() {
  return (
    <div className="App">
      <div className="App--box-1">
        <Carousel />
        <Learn />
        <Companions />
      </div>
    </div>
  );
}

export default App;
