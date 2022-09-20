import "./App.css";
import Main from "./Main";
import Admin from "./Admin";
import Employee from "./Employee";
import Error from "./ErrorPage";
import Contact from "./ContactUs";
import About from "./About";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return <div className="App"> 
  <Router>

    <Routes>

      <Route path="/" element ={<Main/>}></Route>
      <Route path="/home" element ={<Home/>}></Route>
      <Route path="*" element ={<Error/>}></Route>
      <Route path="/admin-login" element ={<Admin/>}></Route>
      <Route path="/employee-login" element ={<Employee/>}></Route>
      <Route path="/contact-us" element ={<Contact/>}></Route>
      <Route path="/about" element ={<About/>}></Route>

    </Routes>

  </Router>
  </div>
}

export default App;
