import React, { useContext } from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { motion } from "framer-motion";

import { themeContext } from "../../Context";


const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

 // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="services">
        <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
            <span>Services</span>
            <span>
                What i offer in my job
            </span>
            
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "30rem" }}
          style={{ left: '27rem' }}
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
          initial={{ left: "-5rem", top: "12rem" }}
          whileInView={{ left: "5rem" }}
          style={{ left: '3rem' }}
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
          initial={{ top: "19rem", left: "27rem" }}
          whileInView={{ left: "20rem" }}
          style={{ left: '19rem' }}
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
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
    </div>
  )
}

export default Services