import React, { useContext } from "react";
import './Intro.css';
import GitHub from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesImogi from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from "framer-motion";

import { themeContext } from "../../Context";

function Intro() {

    const transition = {duration: 2, type: 'spring'};

// context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-mame">
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>Meni</span>
                <span>Fullstack developer 
                Love creating modern and effective 
                websites that help you grow your 
                business High level experience 
                in web design and development knowledge, 
                producing quality work.
                </span>
            </div>
            <button className=' button i-button'>Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/meniAvitan">
                    <img src={GitHub} alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/menachem-avitan-563a0a203/">
                    <img src={Linkedin} alt="linkedin icon" />
                </a>
                
                
            </div>
        </div>
        <div className="i-right">
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img src={Boy} alt="" />
           <motion.img 
                initial={{ left: '-36%' }}
                whileInView={{ left: '-24%' }}
                transition={{ transition }}
           
           src={glassesImogi} alt="" />

           <motion.div
                initial={{ top: "-4%", left: "74%" }}
                whileInView={{ left: "68%" }}
                transition={transition}
                
           style={{ top: '-4%',  left: '68%'}}
           className="floating-div">
               <FloatingDiv image={Crown} txt1 = 'Web' txt2 = 'Developer'/>
           </motion.div>

           <motion.div 
                initial={{ left: "9rem", top: "18rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
           style={{ top: '18rem',  left: '0'}}
           className="floating-div">
               <FloatingDiv image={thumbup} txt1 = 'Best design' txt2 = 'Meni-web'/>
           </motion.div>
           <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
           <div className="blur" style={{ background: "#C1F5FF", top: "17rem", left: "-9rem", width: "21rem", height: "11rem"}}></div>
        </div>
    </div>
  )
}

export default Intro