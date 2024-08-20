import React from "react";



const Teamprops = (props) => {
  return (
    <div className="team-card" style={{}}>
      <img
        src={props.img}
        alt=""
        style={{ width: "100%", marginBottom: "20px"  }}
      />
      <div className="text-center ">
        <h4 className="" style={{ marginBottom: "10px", fontSize: "20px", color: "#1D1D1D" }}>
          {props.h4}
        </h4>
        <h4 style={{ marginBottom: "20px" }}>{props.h5}</h4>
      </div>
      <div className=" "style={{ margin: "10px 0", display: "flex", flexDirection: "row", gap: "15px", justifyContent: "center", fontSize: "16px"}}>
        <TiSocialFacebook className="team-icon" />
        <FaPaperPlane className="team-icon" />
        <FaInstagram className="team-icon" />
        <CiYoutube className="team-icon" />
      </div>
    </div>
  );
};

export default Teamprops;
