import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
