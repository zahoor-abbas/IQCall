import React from 'react'
import "../style/contactus.css";
// import { FaPhoneVolume } from "react-icons/fa6";
// import Button from "../components/button";
import Header from "../components/Header";
import team2 from '../assets/team2.jpg'
import team1 from '../assets/team1.jpg'
import servicesimg from '../assets/services.jpg'
import servicemap from '../assets/map.jpg'



const Contactus = () => {
    const teamMembers = [
      {
        name: "John Doe",
        role: "CEO",
        image: team2,
        phone: "0281888-99",
      },
      {
        name: "Jane Smith",
        role: "Lead Developer",
        image:team1,
        phone: "0281888-99",
      },
      {
        name: "Bob Johnson",
        role: "Designer",
        image: team2,
        phone: "0281888-99",
      },
    ];
  
    return (
      <>
      <Header img={servicesimg} height='400px'/>
      <div className="contactus">
        <header className="contactushead">
          <h1>Contact US</h1>
        </header>
        <div className="container">
          <p>
            Welcome to our Contact Us page! We value your feedback, inquiries, and
            thoughts. Whether you have a question about our products, need
            assistance with an order, or simply want to share your thoughts, we're
            here to help.
          </p>
          <div className="contacts-cards">
            {teamMembers.map((member, index) => (
              <div className="contacts-card" key={index}>
                <img src={member.image} alt={member.name} />
                <h2>{member.name}</h2>
                <span>{member.role}</span>
                <br></br>
                <a>{member.phone}</a>
              </div>
            ))}
          </div>
          <div className='contact-form' >
            <div className='contact-formleft' style={{ }}>
              <form style={{ }}>
                <h2 style={{ marginBottom: "0px" }}>Contact IQcall Today!</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email"  />
                <input type="text" placeholder="company"  />
                <input type="phone" placeholder="Phone Number"  />
                <textarea type="text"  placeholder="Your Message" />
                {/* <Button color='black'> Send</Button> */}
              </form>
            </div>
            <div className='contact-formright'>
              <img src={servicemap} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Contactus
