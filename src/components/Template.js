import React from "react";

let Template = ({heading,para})=>{
    return(
        <div className="container">
            <h1>{heading}</h1>
            <p>{para}</p>
            <hr />
        </div>
    );
}

export default Template;