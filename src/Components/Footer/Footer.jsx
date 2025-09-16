import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>aishwaryafnu@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/_aish_rao?igsh=YzVkOTdmMw==">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://github.com/Aishwarya-hackathon">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
