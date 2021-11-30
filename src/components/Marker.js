import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "./useWindowDimensions";

function Marker({ link, top, left }) {
    const [width, height] = useWindowDimensions();
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleStarClick = (e) => {
        e.preventDefault();
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
                <svg
                    className='star-icon'
                    fill='orange'
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='1280.000000pt'
                    height='1221.000000pt'
                    viewBox='0 0 1280.000000 1221.000000'
                    preserveAspectRatio='xMidYMid meet'>
                    <metadata>
                        Created by potrace 1.15, written by Peter Selinger
                        2001-2017
                    </metadata>
                    <g
                        transform='translate(0.000000,1221.000000) scale(0.100000,-0.100000)'
                        stroke='none'>
                        <path
                            d='M6307 12196 c-98 -36 -178 -122 -275 -295 -116 -207 -394 -714 -756
-1380 -532 -976 -792 -1442 -1071 -1916 l-47 -81 -971 -183 c-535 -101 -1262
-239 -1617 -307 -355 -68 -742 -139 -861 -158 -343 -55 -495 -100 -595 -174
-98 -74 -140 -224 -95 -343 39 -103 -5 -54 871 -984 734 -780 1440 -1525 1641
-1732 109 -111 215 -230 238 -264 40 -59 41 -64 41 -144 0 -48 -13 -160 -30
-260 -17 -97 -60 -402 -96 -678 -119 -924 -192 -1499 -239 -1877 -25 -206 -60
-478 -77 -605 -48 -355 -44 -563 13 -676 26 -53 90 -106 150 -123 117 -35 194
-16 444 108 105 52 393 189 640 304 248 115 801 375 1230 577 429 202 850 401
935 441 85 40 230 111 322 158 184 94 261 121 319 113 50 -7 126 -42 284 -132
140 -80 280 -147 1405 -667 1022 -473 1584 -736 1725 -806 166 -83 233 -105
325 -106 180 0 277 104 299 321 13 129 -2 296 -59 633 -10 63 -51 371 -90 685
-38 314 -104 842 -145 1175 -73 593 -180 1409 -191 1462 -5 24 20 54 232 285
295 320 512 552 1104 1183 256 272 595 635 754 805 159 171 357 381 438 468
182 194 223 245 259 322 82 174 21 314 -174 405 -108 50 -198 72 -473 119
-126 22 -391 71 -589 110 -198 38 -616 117 -930 176 -1644 306 -1961 367
-1972 378 -16 16 -226 393 -1001 1797 -365 663 -684 1239 -707 1280 -23 41
-81 152 -129 246 -110 215 -153 271 -240 314 -78 39 -177 49 -239 26z'
                        />
                    </g>
                </svg>
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
    }

    top: ${({ isMobileScreen, top }) =>
        isMobileScreen ? top + "vh" : top + "vw"};
    left: ${({ isMobileScreen, left }) =>
        isMobileScreen ? left + "vh" : left + "vw"};
`;
