import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import Button from "./Button";
import iqcall from '../assets/iqcall.png'
import "../global.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState("transparent");
    const navbarRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 50;
        if (scrollPosition > threshold) {
          setNavbarBackground("#6773FD");
        } else {
          setNavbarBackground("transparent");
        }
      };
      const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("click", handleClickOutside);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("click", handleClickOutside);
      };
    });
    const handleLinkClick = () => {
      setMenuOpen(false);
    };
  
    return (
      <nav ref={navbarRef} style={{ backgroundColor: navbarBackground }}>
        <div className="navbar">
          <img src={iqcall} alt="Your Image Description" />
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/" onClick={handleLinkClick}> Home</Link>
            </li>
            <li>
              <Link to="aboutus" onClick={handleLinkClick}> About us</Link>
            </li>
            <li>
              <Link to="service" onClick={handleLinkClick}> Services</Link>
            </li>
            <li>
              <Link to="pages" onClick={handleLinkClick}> Pages </Link>
            </li>
           
            <li>
              <Link to="contactus" onClick={handleLinkClick}>Contact US</Link>
            </li>
          </ul>
          <div className="button">
            <Button className="bt" color="transparent"> Request a Quote</Button>
            <div className="menu" onClick={() => { setMenuOpen(!menuOpen);}}>
              <CiMenuBurger style={{width: "30px", height: "30px", color: "white", position: "absolute", top: "20px", right: "10px"}} />
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
