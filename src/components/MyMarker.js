import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import useWindowDimensions from "./useWindowDimensions";
import "./MyMarker.css";

function MyMarker({ link, top, left }) {
    const [width, height] = useWindowDimensions();
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const markerContainerRef = useRef();

    const handleStarClick = (e) => {
        // e.preventDefault();
    };

    useEffect(() => {
        if (width <= 1024 && width < height) {
            // mobile screen portrait mode
            markerContainerRef.current.style.top = `${top}vh`;
            markerContainerRef.current.style.left = `${left}vh`;
        } else {
            markerContainerRef.current.style.top = `${top}vw`;
            markerContainerRef.current.style.left = `${left}vw`;
        }
    }, [width, height, top, left]);

    return (
        <div className='marker-container' ref={markerContainerRef}>
            <a
                href={link}
                className='starContainer'
                onClick={handleStarClick}
                target='_blank'
                rel='noreferrer'>
                <img
                    src='/assets/star.svg'
                    className='star-icon'
                    alt='staricon'
                />
            </a>
        </div>
    );
}
/*  */

/*  */
export default MyMarker;

const MarkerContainer = styled.div`
    position: absolute;
    .star-icon {
        width: ${({ isMobileScreen }) =>
            isMobileScreen ? 2 + "vh" : 2 + "vw"};
        height: auto;
        filter: drop-shadow(1px 1px 1px lightgray);
        cursor: pointer;
    }

    top: ${({ isMobileScreen, top }) =>
        isMobileScreen ? top + "vh" : top + "vw"};
    left: ${({ isMobileScreen, left }) =>
        isMobileScreen ? left + "vh" : left + "vw"};
    /* top: ${({ isMobileScreen, top }) =>
        isMobileScreen ? `${top}vh` : `${top}vw`};
    top: ${({ isMobileScreen, left }) =>
        isMobileScreen ? `${left}vh` : `${left}vw`}; */

    .close {
        width: 20px;
        position: relative;
        top: -570px;
    }
    /* z-index: 10000; */
`;
