import React from 'react';
import './Footer.css';
import Wave from "../../img/wave.png";
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

function Footer() {
  return (
      <div className="footer">
        <img src={Wave} alt="" style={{ width: '100%' }}/>
        <div className="f-content">
        <span>Zainkeepscode@gmail.com</span>
        <div className="f-icons">
          <Github color="white" size={"3rem"} />
          <Linkedin color="white" size={"3rem"} />
        </div>
        </div>
      </div>

  )
}

export default Footer