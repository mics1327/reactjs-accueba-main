import React from 'react';


const AdminModal = ({open, onClose}) => {
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
                       <button className="btnPrimary">Log In</button> 
                   </div>
            </div>
        </div>
    </div>
  )
}

export default AdminModal
