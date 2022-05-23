import React, { useContext } from "react";
import './Work.css';
import Upwork from '../../img/Upwork.png';
import Amazon from '../../img/amazon.png';
import Fiverr from '../../img/fiverr.png';
import diamondsAlley from '../../img/Facebook.png';
import ExtraPizza from '../../img/Shopify.png';
import { motion } from "framer-motion";
import { themeContext } from "../../Context";



function Work() {
              // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div className="works" id="works">
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Works for all these</span>
            <span>Clients</span>
            <span>
                What i offer in my job
            </span>
            
            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-maincircle"
        >
                <div className="w-seccircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={ExtraPizza} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={diamondsAlley} alt="" />
                </div>
                
            </motion.div>
            <div className="w-backcircle bluecircle"></div>
            <div className="w-backcircle yellowcircle"></div>
        </div>
    </div>
  )
}

export default Work