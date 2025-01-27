import React from "react";
import './projects.css'
import Card from './Card'
const Projects = () =>{
    return(
        <div className="Main" id="proj">
            <h1>Projects</h1>
            <h1>This is from ......</h1>
            <div className="classLst">
                <Card name = "Restaurant Website"/>
                <Card name = "Restaurant Website"/>
                <Card name = "Restaurant Website"/>
            </div>
        </div>
    )
}

export default Projects;