import { BrowserRouter, Routes, Route } from "react-router";
import { createContext, useState } from "react";
import Contact from "./components/pages/Contact.jsx";

import "./assets/css/App.css";

function App() {
  const LangContext = createContext();
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={lang}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LangContext.Provider>
  );
}

export default App;
