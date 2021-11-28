import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Animation from "./Animation";

function MainBackground() {
    const animations = [
        "albero",
        // "casette",
        "fontana",
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
            {animations.map((animation, index) => (
                <Animation
                    key={"" + index}
                    src={`/assets/gifs/${animation}.gif`}
                    type='webm'
                    className={`animation ${animation}`}
                />
            ))}
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
        width: 100%;
        max-width: 1920px;
        /* height: 1920px; */
    }
    .animation {
        /* border : 2px dashed black; */
        position: absolute;
    }
    .albero {
        width: 14vw;
        height: 16vw;
        top: 25vw;
        left: 33vw;
    }
    .fontana {
        width: 8.4vw;
        height: 10.4vw;
        top: 36.6vw;
        right: 15.8vw;
    }

    @media screen and (max-width: 1024px) and (orientation: portrait) {
        img {
            height: 100vh;
            width: auto;
            /* height : auto; */
        }
        .animation {
        }
        .albero {
            width: 14vh;
            height: 16vh;
            top: 25vh;
            left: 33vh;
        }
        .fontana {
            width: 8.4vh;
            height: 10.4vh;
            top: 37.3vh;
            left: 75.5vh;
        }
    }

    @media screen and (max-width: 1024px) and (orientation: landscape) {
        .animation {
        }

        .fontana {
            width: 8.4vw;
            height: 10.4vw;
            top: 37.3vw;
            right: 16vw;
        }
    }
    //FIXME: 
    /* fix fontana display on ipad pro lanscape mode */
`;
