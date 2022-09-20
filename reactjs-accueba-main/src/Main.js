import "./App.css"
import {Link} from "react-router-dom";
function Main()
{
    return <div className="main">
    <div>
    <Link to="/home" id="company">
      ACCUEBA
    </Link >
    <Link to="/home" id="home">
      Home
    </Link>
    <Link to="/About" id="about">
      About Accueba
    </Link>
    <Link to="/contact-us" id="contact">
      Contact Us
    </Link >
  </div>
  <div>
  <Link to ="/admin-login" exact id="admin-login-button">
    <h1 id="admin-text">Admin Login</h1>
    </Link>
    <Link to ="/employee-login" id="employee-login-button">
    <h1 id="employee-text">Employee Login</h1>
    </Link>
  </div>
    </div>
}

export default Main;