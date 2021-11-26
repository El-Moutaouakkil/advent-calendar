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
    useEffect(() => {
        const body = document.querySelector("body");
        window.addEventListener("scroll", () => {
            let scrollPosition = window.scrollX;
            if (scrollPosition <= 230 && titleRef?.current) {
                titleRef.current.classList.add("onScroll");
            } else titleRef.current.classList.remove("onScroll");
        });
    }, []);

    return (
        <BgContainer>
            <img src='/assets/map.jpg' alt='main background' />
            {animations.map((animation, index) => (
                <Animation
                    key={"" + index}
                    src={`/assets/gifs/${animation}.gif`}
                    type='webm'
                    className='animation'
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
    /* border : 2px solid crimson */
    height: 100vh;
    img,
    .animation {
        width: 700px;
        height: 100vh;
        display: block;
    }

    .animation {
        object-fit: fill;
        position: absolute;
        top: 0;
        left: 0;
    }
    p {
        display: inline-block;
        background-color: red;
        color: white;
        position: fixed;
        bottom: 0;
        right: 0;
    }

    .title {
        width: 180px;
        height: 130px;
        object-fit: contain;
        display: inline-block;
        position: fixed;
        bottom: 4vh;
        right: 13vw;
        transition: all 0.4s ease-out;

        &.onScroll {
            /* background-color: gray; */
            width: 80px;
            height: 60px;
            object-fit: contain;
            bottom: 1vh;
            right: 3vw;
        }
    }

    @media all and (max-width: 469px) {
        img,
        .animation {
            display: block;
            /* width: 100%; */
            max-width: 2000px;
            height: 100%;
            max-height: 2000px;
            object-fit: cover;
            object-position: 20%;
        }

        .title {
            width: 25%;
            height: 25%;
        }
    }
`;
