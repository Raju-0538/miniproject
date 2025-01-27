import React from "react";
import './projects.css';
const Card = (props)=> {
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <span>Gaandu</span>
            <div className="layer">
                
            </div>
        </div>
    );
}

export default Card;