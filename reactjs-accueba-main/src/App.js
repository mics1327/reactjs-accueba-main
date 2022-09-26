import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import NavBar from "./NavBar";
import Footer from "./Components/footer/Footer.js";

function App() {
  return (<>
    <NavBar />
    <div className="page-container">
      <div className="content-wrap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
      <Footer />
    </div>

  </>)
}

export default App;
