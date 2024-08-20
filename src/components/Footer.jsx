import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPaperPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import iqcall from '../assets/iqcall.png'
import "../global.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container footer-container" style={{}}>
      <div className="footer1">
        <img src={iqcall} alt="iqcall"></img>
      </div>
      <div className="footer1">
        <p style={{ marginBottom: "10px" }}>Management</p>
        <p style={{ marginBottom: "10px" }}>Contact</p>
        <p href="" style={{ marginBottom: "10px" }}>
          News
        </p>
      </div>
      <div className="footer1">
        <div style={{ marginBottom: "10px" }}>
          <h5 style={{ marginBottom: "10px" }}>Give Us A Call</h5>
          <p>1-800-765-4321</p>
        </div>
        <h5 style={{ marginBottom: "10px" }}>Email Us</h5>
        <p style={{ marginBottom: "10px" }}>info@iqcall.com</p>
      </div>
      <div className="footer1">
        <h5 style={{ marginBottom: "10px" }}>Join Us</h5>
        <div className=" " style={{ display: "flex", fontSize: "16px" }}>
          <div className="test-icon">
            <TiSocialFacebook className="footer-icon" />
          </div>
          <div className="test-icon">
            <FaPaperPlane className="footer-icon" />
          </div>
          <div className="test-icon">
            <FaInstagram className="footer-icon" />
          </div>
          <div className="test-icon">
            <CiYoutube className="footer-icon" />
          </div>
        </div>
      </div>
    </div>
    <hr style={{ marginTop: "" }} />
    <p className="text-center">@ 2020 Copyright</p>
  </footer>
  )
}

export default Footer
