import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";
// import "./global.css";
import Header from "./components/Header";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Footer from "./components/Footer";

function App() {

  return (
  <>
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="homeblocks" element={<Service/>} />
        <Route path="service" element={<Service />} />
        <Route path="pages" element={<Service />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactus" element={<Contactus/>} />
      </Routes>
    </Router>  
    <Footer/>  
  </>
  );
}

export default App;

