import React, { useContext } from "react";
import Project from '../Project/Project';
import './ProjectList.css';
import {projects} from '../../data';
import { themeContext } from "../../Context";


function ProjectList() {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="pl" id="projects">
        <div className="pl-text">
          <h1 className="pl-title" style={{ color: darkMode ? "white" : "" }}>MY PROJECTS</h1>
          <p className="pl-desc">
          Final project in zefat academy - practical engineer a project
                  to develop typing skills with a personal vocabulary. build
                  with html & css & js & web-speech-API & php & mysql
          </p>
        </div>
        <div className="pl-list">
          {projects.map((item) => (
            <Project key={item.id} img={item.img} link={item.link}/>
          ))}
          
        </div>
    </div>
  )
}

export default ProjectList