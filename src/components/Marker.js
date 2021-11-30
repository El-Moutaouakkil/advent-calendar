import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "./useWindowDimensions";

function Marker({ link, top, left }) {
    const [width, height] = useWindowDimensions();
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleStarClick = (e) => {
        // e.preventDefault();
        setShowModal(true);
    };

    useEffect(() => {
        console.log(showModal);
        if (width <= 1024 && width < height) {
            setIsMobileScreen(true);
        } else setIsMobileScreen(false);
    }, [width, height, showModal, isMobileScreen]);

    return (
        <MarkerContainer
            top={top}
            left={left}
            width={width}
            isMobileScreen={isMobileScreen}>
            <a href={link} className='starContainer' onClick={handleStarClick}>
                <img src='/assets/star.svg' className='star-icon' alt='' />
            </a>
            {/* {`window dimensions are : ${width}px x ${height}px`}
            <h2>{isMobileScreen ? "mobile screen" : "Desktop screen"}</h2> */}
        </MarkerContainer>
    );
}

export default Marker;

const MarkerContainer = styled.div`
    position: absolute;
    .star-icon {
        width: ${({ isMobileScreen }) =>
            isMobileScreen ? 2 + "vh" : 2 + "vw"};
        height: auto;
        filter: drop-shadow(1px 1px 1px lightgray);
    }

    top: ${({ isMobileScreen, top }) =>
        isMobileScreen ? top + "vh" : top + "vw"};
    left: ${({ isMobileScreen, left }) =>
        isMobileScreen ? left + "vh" : left + "vw"};
`;
