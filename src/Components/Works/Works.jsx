import React from "react";
import "./Works.css";
import ieee from "../../img/ieee_icon.png";
import TandF from "../../img/TandF_icon.png";
import aws from "../../img/aws_icon.jpeg";
import microsoft from "../../img/microsoft_icon.jpg";

function Works() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Worked on all these</span>
        <span>Research Papers and Certifications</span>
        <span>
          kkkkkkkkkkk
          <br />
          mmmmmmmmmmm
          <br />
          nnnnnnnnnnnn
          <br />
          jjjjjjjjjjjj
        </span>

        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right-side */}
      <div className="w-right">
        <div className="w-mainCircle">
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
          {/*background circles*/}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle greenCircle"></div>
        </div>
      </div>
    </div>
  );
}

export default Works;
