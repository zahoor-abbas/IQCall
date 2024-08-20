import React from "react";
import About from "../components/home/About";
import StepsSection from "../components/home/StepsSection";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";
import Team from "../components/home/Team";
import Map from "../components/home/Map";
import Header from "../components/Header";
import Button from "../components/Button";
import headerbg from '../assets/images-hero.avif';
import "../style/home.css";

const Home = () => {
  return (
    <>
    <Header img={headerbg}  className="home-section">
    <div className="small-container">
      <h1 style={{ margin: "" }}>
              Convert Leads With 
              Integrated Call Center
            </h1>
            <p>
              Our maxican dept collections helped us handle three-times  the amount of placement.   Our maxican dept collections helped us handle three-times  the amount of placement.  Our maxican dept collections helped us handle three-times  the amount of placement. Our maxican dept collections helped us handle three-times  the amount of placement
            </p>
            <Button arrowafter color="#5F72FC">
              Request Pricing
            </Button>
    </div>
    </Header>
    <section>
      <div className="container" style={{ backgroundColor: "#6672FC" }}>
        <div className="home" style={{ color: "white" }}>
          <div className="">
            <h3 className="">Ensure your Business</h3>
            <h3>Continuity & Service Levels</h3>
          </div>
          <Button arrowafter color="#5E73FC">
            Discover More
          </Button>
        </div>
      </div>
    </section>
    <About />
    <StepsSection />
    <Services />
    <Testimonial />
    <Team />
    <Map />
  </>
  )
}

export default Home
