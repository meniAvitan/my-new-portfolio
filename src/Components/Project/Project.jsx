/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import './Project.css';

function Project({img, link}) {

  return (
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
  )
}

export default Project