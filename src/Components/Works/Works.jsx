import React from "react";
import "./Works.css";
import ieee from "../../img/ieee_icon.png";
import TandF from "../../img/TandF_icon.png";
import aws from "../../img/aws_icon.jpeg";
import microsoft from "../../img/microsoft_icon.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion, spring } from "framer-motion";

function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Worked on all these
        </span>
        <span style={{ color: "var(--green)" }}>
          Publications and Certifications
        </span>
        <span className="section-content">
          •{" "}
          <em>
            “Identification and Classification of Paddy Crop Diseases using Big
            Data ML Techniques”
          </em>
          - Taylor & Francis, Data Science and Data Analytics
          <br />
          <br />• <em>“Real-Time Sign Language Recognition”</em> - IEEE
          International Conference, DISCOVER
          <br />
          <br />•{" "}
          <em>
            Microsoft Certified: Introduction to Programming Using JavaScript
          </em>
          - Microsoft Technology Associate (MTA)
          <br />
          <br />
          <em>• AWS Certified Cloud Practitioner</em> – Amazon Web Services
          (CLF-C01)
        </span>

        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right-side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: spring }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={ieee} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={TandF} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={aws} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={microsoft} alt="" />
          </div>
        </motion.div>
        {/*background circles*/}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle greenCircle"></div>
      </div>
    </div>
  );
}

export default Works;
