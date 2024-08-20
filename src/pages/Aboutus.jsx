import React from 'react'
import aboutusimg from '../assets/aboutus.jpg'
import team2 from '../assets/team2.jpg'
import team1 from '../assets/team1.jpg'
import Header from '../components/Header';
import '../style/aboutus.css'


const Aboutus = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      image: team2, 
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      image: team1, 
    },
    {
      name: 'Bob Johnson',
      role: 'Designer',
      image: team2, 
    },
    {
      name: 'Bob Johnson',
      role: 'Designer',
      image: team1, 
    },
    {
      name: 'Bob Johnson',
      role: 'Designer',
      image: team2, 
    },
    {
      name: 'Bob Johnson',
      role: 'Designer',
      image: team1, 
    },
  
  ];
  return (
    <>
    <Header img={aboutusimg} height='400px'/>
    <div className="app">
      <header className="app-header">
        <h1>About Us</h1>
      </header>
      <div className="about-container">
        <p>
          Welcome to our About Us page! We are a passionate team dedicated to providing
          high-quality products/services. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="team-cards" >
          {teamMembers.map((member, index) => (
            <div className="card" key={index} >
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutus
