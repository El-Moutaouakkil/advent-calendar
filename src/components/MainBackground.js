import React from "react";
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

    return (
        <BgContainer>
            <img src='/assets/map.jpg' alt='main background' />
            {animations.map((animation, index) => (
                <Animation
                    key={"" + index}
                    src={`/assets/animations/${animation}.webm`}
                    type='webm'
                    className='animation'
                />
            ))}
            {/* <img
                src='/assets/title.png'
                alt='fontana title'
                className='title'
            /> */}
        </BgContainer>
    );
}

export default MainBackground;

const BgContainer = styled.div`
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
    .title {
        display: block;
        bottom: 0;
        right: 0;
        position: fixed;
        width: 30%;
        height: 30%;
    }

    @media all and (min-width: 469px) {
        img,
        .animation {
            display: block;
            width: 100%;
            max-width: 2000px;
            height: 100%;
            max-height: 2000px;
            object-fit: fill;
        }
       

        .title {
            width: 30%;
            height: 30%;
        }
    }
`;
