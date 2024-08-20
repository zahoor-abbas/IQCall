import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { PiFolderUserFill } from "react-icons/pi";

const Services = () => {
  return (
    <section className="container" style={{ padding: "60px 10px" }}>
      <div className="services" style={{}}>
        <div className="services-left" style={{}}>
          <p style={{ color: "red" }}>About Call Center</p>
          <h1 className="">
            {" "}
            World-Class <br /> Contact Center
          </h1>
          <p className="">
            Our agents are fully bilingual, bi-cultural, well educated and have
            expertise in a wide array of business functions such as Debt
            Collection, Customer Service
          </p>
        </div>
        <div className="services-right">
          <div className="services-center" style={{}}>
            <div className="services-card">
              <BiPhoneCall className="icon" style={{ marginBottom: "10px" }} />
              <h4 className="margintb" style={{ marginBottom: "10px" }}>
                Debit Collection
              </h4>
              <p>
                We will allow you to establish a world-class Debt Collection
              </p>
            </div>
            <div className="services-card">
              <AiOutlineMessage
                className="icon"
                style={{ marginBottom: "10px" }}
              />
              <h4 style={{ marginBottom: "10px" }}>Lead Generation</h4>
              <p>
                Improve direct response time, <br /> increase lead generation
              </p>
            </div>
          </div>
          <div className="right" style={{}}>
            <div className="services-card">
              <FaPhoneVolume
                className="icon"
                style={{ marginBottom: "10px" }}
              />
              <h4 style={{ marginBottom: "10px" }}>Customer Service</h4>
              <p>Center with bicultural & bilingual agents</p>
            </div>
            <div className="services-card">
              <PiFolderUserFill
                className="icon"
                style={{ marginBottom: "10px" }}
              />
              <h4 style={{ marginBottom: "10px" }}>IT Development</h4>
              <p>
                {" "}
                We provides nearshore IT staff in <br /> Mexico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
