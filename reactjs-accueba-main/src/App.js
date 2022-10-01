import React, {useState} from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./NavBar";
import Footer from "./Components/footer/Footer.js";
import AdminModal from "./pages/LoginPopup/Admin/AdminModal";
import EmpModal from "./pages/LoginPopup/EmpModal";


function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    
  <>
    <NavBar />
    <div className="page-container">
      <div className="content-wrap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <p>Log In</p>
      <button className='admModal'onClick={()=> setOpenModal(true)}>Admin Login</button>
      <button className='empModal' onClick={()=> setOpenModal(true)}>Employee Login</button>
      <AdminModal open={openModal} 
      onClose={() => setOpenModal(false)}/>
      <EmpModal open={openModal} 
      onClose={() => setOpenModal(false)}/>
    </div>
      <Footer />
    </div>

  </>)
}

export default App;
