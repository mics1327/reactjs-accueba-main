import {
    Routes,
    Route,
  } from "react-router-dom";
  import About from "./About"
  import Contact from "./Contact";
  import NavBar from "../Components/NavBar";
  
  import Footer from "../Components/footer/Footer";
  import LoginBtn from "../Components/buttons/loginbtn";
  import styles from "./styles.css"

  function Home() {
    return (
    <>
      <NavBar />
      <div className="page-container">
        <div className="content-wrap">
        <Routes>
          <Route path="/"/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <LoginBtn />
      </div>
        <Footer />
      </div>
    </>)
  }
  
  export default Home;
