import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Learn from "./components/Learn/Learn";
import Companions from "./components/Companions/Companions";
import Announcements from "./components/Announcements/Announcements";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import SubFooter from "./components/SubFooter/SubFooter";
import PlaceHolder from "./components/PlaceHolder/PlaceHolder";
import Header from "./components/Header/Header";
import NavMenu from "./components/NavMenu/NavMenu";

function App() {
  return (
    <div className="App">
      <div className="App--box-1">
        <Header />
        <Carousel />
        <Learn />
        <Companions />
        <Announcements />
        <Sponsors />
        <Footer />
        <PlaceHolder />
        <SubFooter />
      </div>
    </div>
  );
}

export default App;
