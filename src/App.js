//
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home, About, Contact } from "./pages";

import "./css/App.scss";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
