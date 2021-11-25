import React from "react";

function Animation({ src, type, className }) {
    return (
        <video autoPlay loop muted className={className}>
            <source src={src} type={`video/${type}`}></source>
        </video>
    );
}

export default Animation;
