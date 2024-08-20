import React from "react";

const StepSectionProps = (props) => {
  return (
    <div className="stepfirst">
      <h4 style={{ margin: "5px 0", color: "#1D1D1D" }}>
        {" "}
        {props.h4} <br />
        {props.h5}{" "}
      </h4>
      <span className="stepbullet" style={{ fontSize: "16px" }}>
        {" "}
        {props.span}
      </span>
      <p style={{ margin: "5px 0" }}>
        {props.ptop}
        <br /> {props.pbottom}
      </p>
    </div>
  );
};

export default StepSectionProps;
