import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const EmpModal = ({open, onClose}) => {

    if(!open) return null
  return (
    <div className= 'overlay'>
        <div className = 'modalContainer'>  
            <div className='modalRight'>
            <p className='closeBtn' onClick={onClose}> X </p>
                    <div className='content'>
                       <p>Enter username</p>
                       <input type= "text" />
                       <p>Enter password</p>
                       <input type= "text" />
                    </div>
                   <div className="btnContainer">
                   <Button component={Link} to="/pages/LoginPopup/Admin/AdminPages/EmpInfo" variant="contained" color="primary">
  About Page
</Button>
                   </div>
            </div>
        </div>
    </div>
  )
}


export default EmpModal
