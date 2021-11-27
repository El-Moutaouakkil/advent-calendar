import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Animation from "./Animation";

function MainBackground() {
    const animations = [
        "albero",
        // "casette",
        // "fontana",
        // "forziere",
        // "luci_banca",
        // "luci_centro",
        // "luci_dx",
        // "luci_municipio",
        // "luci_sx_bottom",
        // "luci_sx_top",
        // "tetto",
    ];

    const titleRef = useRef();
    /*  useEffect(() => {
        const body = document.querySelector("body");
        window.addEventListener("scroll", () => {
            let scrollPosition = window.scrollX;
            if (scrollPosition <= 230 && titleRef?.current) {
                titleRef.current.classList.add("onScroll");
            } else titleRef.current.classList.remove("onScroll");
        });
    }, []); */

    return (
        <BgContainer>
            <img src='/assets/map.jpg' alt='main background' />
            {/* {animations.map((animation, index) => (
                <Animation
                    key={"" + index}
                    src={`/assets/gifs/${animation}.gif`}
                    type='webm'
                    className='animation'
                />
            ))} */}
            {/* <img
                ref={titleRef}
                src='/assets/title.png'
                alt='fontana title'
                className='title'
            /> */}

            {/* <p>This is a title</p> */}
        </BgContainer>
    );
}

export default MainBackground;

const BgContainer = styled.div`
    img {
        display: block;
        border: 4px solid black;
        height: 2670px;
    }

    @media all and (max-width: 468px) {
    }
`;
