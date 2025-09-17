import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SignLang from "../../img/SignLang.png";
import NYtaxi from "../../img/ny_taxi.jpg";
import WaitQR from "../../img/WaitQR.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
      <span style={{ color: "var(--green)" }}>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://github.com/Aishwarya-hackathon/signlangdetection">
            <img src={SignLang} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Aishwarya-hackathon/Internship_Project">
            <img src={NYtaxi} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Aishwarya-hackathon/WAITQR-webapp?tab=readme-ov-file">
            <img src={WaitQR} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
