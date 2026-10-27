import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "./pages/Sobre/sobre";
import Home from "./pages/Home/home";
import Contato from "./pages/Contato/contato";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
