import React from "react";

let Template = ({title,description})=>{
    return(
        <div className="container">
            <h1>{title}</h1>
            <p>{description}</p>
            <hr />
        </div>
    );
}

export default Template;