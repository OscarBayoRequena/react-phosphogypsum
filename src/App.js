import { BrowserRouter, Routes, Route } from "react-router";
import { createContext, useState } from "react";

import Home from "./components/pages/Home.jsx";
import Sources from "./components/pages/Sources.jsx";
import Contact from "./components/pages/Contact.jsx";
import Authors from "./components/pages/Authors.jsx";

import "./assets/css/App.css";

function App() {
  const LangContext = createContext();
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={lang}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/authors" element={<Authors />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LangContext.Provider>
  );
}

export default App;
