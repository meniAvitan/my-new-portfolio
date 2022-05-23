import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Experiance.css';

const Experiance = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experiance">
        <div className="box">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
            <span>Experiance</span>
        </div>
        <div className="box">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
            <span>Projects</span>
        </div>
        <div className="box">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
            <span>Experiance</span>
        </div>
    </div>
  )
}

export default Experiance