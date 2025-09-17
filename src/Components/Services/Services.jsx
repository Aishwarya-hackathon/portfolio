import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Resume from "./Resume.pdf";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion, spring } from "framer-motion";

function Services() {
  const transition = { duration: 1, type: spring };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: "var(--green)" }}>My Awesome</span>
        <span>services</span>
        <span>
          <em style={{ color: darkMode ? "white" : "var(--black)" }}>
            Merging creativity with logic:{" "}
          </em>
          <em
            style={{
              fontWeight: "bold",
              color: "var(--green)",
            }}
          >
            {" "}
            Design • Development • UX{" "}
          </em>
          <br />
          <br />
          <p
            style={{
              color: darkMode ? "white" : "var(--black)",
              fontStyle: "normal",
            }}
          >
            Elegant design. Clean code. User-focused solutions.
          </p>
          <div style={{ color: darkMode ? "white" : "var(--black)" }}>
            <h2 className="section-title">Education</h2>

            <em style={{ fontWeight: "bold" }}>
              • Master of Science in Computer Science
            </em>
            <p>California State University, East Bay — Hayward, CA</p>
            <p>GPA: 3.9 / 4.0 — May 2025</p>

            <em style={{ fontWeight: "bold" }}>
              • Bachelor of Engineering in Computer Science
            </em>
            <p>NMAM Institute of Technology, Karkala — Karnataka, India</p>
            <p>GPA: 8.95 / 10 — June 2022</p>
          </div>
        </span>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* first card */}
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "28rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-1rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
