import React from "react";
import StepSectionProps from './StepSectionProps'

const StepsSection = () => {
  return (
    <section className="" style={{ backgroundColor: "#F8F8F8" }}>
      <div
        className="container "
        style={{ lineHeight: "30px", padding: "0 10px" }}
      >
        <h1 style={{ margin: "15px 0", color: "#1D1D1D" }}>
          How to Get
          <br />
          Started
        </h1>
        <div
          className="stepsection"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <StepSectionProps
            h4="Setup your"
            h5="Compaign"
            span="01"
            ptop="Name your Campaign and"
            pbottom=" choose your country"
          />
          <StepSectionProps
            h4="Get a Tracking "
            h5="Number"
            span="02"
            ptop="Get a unique Tracking Number "
            pbottom=" where you can send calls"
          />
          <StepSectionProps
            h4="Add a Target"
            h5=" Line"
            span="03"
            ptop="Forward your calls to buyers or"
            pbottom=" anywhere you'd like them to go"
          />
          <StepSectionProps
            h4="Launch Your"
            h5="Compaign"
            span="04"
            ptop="Test your Tracking Number to"
            pbottom=" see operate in the real-time"
          />
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
