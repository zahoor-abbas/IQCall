import React from 'react'
import capture_img from '../../assets/Capture.png'
import Button from '../Button'

const About = () => {
  return (
    <section className="container" style={{ padding: "30px 10px" }}>
    <div className="about">
      <div className="aboutleft" style={{}}>
        <p style={{ color: "red", marginBottom: "10px" }}>
          About Call Center
        </p>
        <h1 style={{ marginBottom: "10px" }}>
          World-Class <br />
          Contact Center
        </h1>
        <p className="" style={{ marginBottom: "10px" }}>
          Our agents are fully bilingual, bi-cultural, well educated and have
          expertise in a wide array of business functions such as Debt
          Collection, Customer Service
        </p>
        <div className="" style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Customer Services</p>
          <p>55%</p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <progress value={60} max={100} style={{ width: "100%" }}></progress>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Sale/ Lead Generation</p>
          <p>32%</p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <progress value={32} max={100} style={{ width: "100%" }}></progress>
        </div>
        <Button arrowafter color="#5872FA">
          Discover More
        </Button>
      </div>
      <div className="aboutright" style={{ flex: "auto" }}>
        <img src={capture_img} alt=""/>
      </div>
    </div>
  </section>
  )
}

export default About
