import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Sobre from "./pages/Sobre/sobre";
import Home from "./pages/Home/home";
import Contato from "./pages/Contato/contato";
import DisneyLogo from "./assets/disneyLogo.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="nav-container">
        <img src={DisneyLogo} alt="DisneyLogo" className="img-logo" />

        <nav className="navBar">
          <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
        </nav>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
