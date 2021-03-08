import React from "react";
import { Typography, Button } from "@material-ui/core";
import "./style.css";
import Content from "./Content";

const HomePage = () => {
  return (
    <div>
      <div className="back">
        <div className="subCon">
          <Typography
            style={{
              fontSize: "2.7vw",
              color: "white",
              fontFamily: "sans-serif",
            }}
          >
            Educate.Evaluate.Celebrate
          </Typography>
          <Button
            style={{
              backgroundColor: "#29ABE2",
              color: "white",
              paddingTop: 0,
              paddingRight: 30,
              paddingBottom: 4,
              paddingLeft: 30,
              fontFamily: "sans-serif",
              fontSize: "2vw",
              textTransform: "capitalize",
              borderRadius: 0,
              border: 0.7,
              borderStyle: "solid",
              borderColor: "white",
            }}
            disableRipple
          >
            Find A Plan
          </Button>
        </div>
      </div>
      <div className="logosCon">
        <div className="LogoCon">
          <img
            className="HumanaLogo"
            alt="Humana-Logo"
            src={require("../assets/PNGPIX-COM-Humana-Logo-PNG-Transparent.png")}
          />
          <img
            className="AetnaLogo"
            alt="Aetna logo"
            src={require("../assets/aetna_logo_reg_rgb_vio (1).png")}
          />
          <img
            className="UnitedLogo"
            alt="United-Health-Care-Logo"
            src={require("../assets/United-Health-Care-Logo2 (1).png")}
          />
          <img
            className="AnthemLogo"
            alt="Anthem-Logo"
            src={require("../assets/anthem-logo.png")}
          />
        </div>
      </div>

      <div id="top-heading-bar">
          our plan to help you
      </div>

      <Content />

    </div>
  );
};

export default HomePage;
