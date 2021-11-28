import React from "react";

function Animation({ src, type, className }) {
    return (
        // <video autoPlay loop muted className={className}>
        //     <source src={src} type={`video/${type}`}></source>
        // </video>
        <img src={src} alt="a gif animation should goes here" className={className} />
    );
}

export default Animation;


