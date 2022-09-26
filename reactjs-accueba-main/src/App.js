import React, {useState} from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./NavBar";
import AdminModal from "./pages/LoginPopup/AdminModal";
import EmpModal from "./pages/LoginPopup/AdminModal";

function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    
  <>
    <NavBar />
    <div className="container">
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
  </>)
}

export default App;
