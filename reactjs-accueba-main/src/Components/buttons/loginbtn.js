import AdminModal from "../../pages/LoginPopup/AdminModal";
import EmpModal from "../../pages/LoginPopup/EmpModal";
import React, {useState} from 'react';
import "./loginbtn.css";

export default function LoginBtn(){
    const [openModal, setOpenModal] = useState(false)
    return(
    <div className="btn-toolbar">
        <div className="btn-grp">
            <button className='admModal'onClick={()=> setOpenModal(true)}>Admin Login</button>
            <button className='empModal' onClick={()=> setOpenModal(true)}>Employee Login</button>
            <AdminModal open={openModal} 
            onClose={() => setOpenModal(false)}/>
            <EmpModal open={openModal} 
            onClose={() => setOpenModal(false)}/>
        </div>
    </div>)
}