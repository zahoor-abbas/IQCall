import React, { useState } from 'react'
import Team1 from '../../assets/team1.jpg'
import Team2 from '../../assets/team2.jpg'
import Team3 from '../../assets/team3.jpg'
import Team4 from '../../assets/team4.jpg'
import { TiSocialFacebook } from "react-icons/ti";
import { FaPaperPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Team = () => {
  const [teamuser,setTeamUser] = useState([
    {
      img: Team1,
      h4: "Barbara J. Zambrano",
      h5: "Manager"
    },
    {
      img: Team2,
      h4: "John Doe",
      h5: "Developer"
    },
    {
      img: Team3,
      h4: "Jane Smith",
      h5: "Designer"
    },
    {
      img: Team4,
      h4: "Alice Johnson",
      h5: "Marketer"
    }
  
    
    
    
  ]);
  return (
    <section className="container">
    <div className="" style={{ padding: "100px  10px"}}>
      <div style={{ textAlign: "center", lineHeight:'30px' }}>
        <h3 style={{ color: "#FF6162" }}>Our Team</h3>
        <h1 style={{ color: "#1D1D1D" , marginBottom:'20px' }}>Our Best Spicialists <br /> Work For You
        </h1>
      </div>
      <div className="team">
        {teamuser.map((team,index)=>(
              <div className="team-card" key={index}>
               <img src={team.img} alt={team.h4} width={"100%"} style={{marginBottom:"20px"}} />
              <div className="text-center ">
                <h4 className="" style={{ marginBottom: "10px", fontSize: "20px", color: "#1D1D1D" }}>
                  {team.h4}
                </h4>
                <h4 style={{ marginBottom: "20px" }}>{team.h5}</h4>
              </div>
              <div className=" "style={{ margin: "10px 0", display: "flex", flexDirection: "row", gap: "15px", justifyContent: "center", fontSize: "16px"}}>
                <TiSocialFacebook className="team-icon" />
                <FaPaperPlane className="team-icon" />
                <FaInstagram className="team-icon" />
                <CiYoutube className="team-icon" />
              </div>
            </div>
        ))}
              </div>

       
    </div>
  </section>
  )
}

export default Team
