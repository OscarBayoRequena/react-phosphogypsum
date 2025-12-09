import { BrowserRouter, Routes, Route } from "react-router";
import Contact from "./components/pages/Contact.jsx"

import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
