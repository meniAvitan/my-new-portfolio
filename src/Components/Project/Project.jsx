/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import './Project.css';

function Project({img, link, desc}) {

  return (
    <div className="wrapper">
    <div className='project'>
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
          </a>

    </div>
      <p className="p-desc">{desc}</p>
    
    </div>

    
  )
}

export default Project