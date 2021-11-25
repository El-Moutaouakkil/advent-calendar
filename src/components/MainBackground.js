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
        </BgContainer>
    );
}

export default MainBackground;

const BgContainer = styled.div`
    height: 100vh;
    img {
        /* position: relative; */
        width: 700px;
        display: block;
    }

    .animation {
        display: block;
        width: 700px;
        position: absolute;
        top: 0;
        left: 0;
    }

    @media all and (min-width: 469px) {
        img {
            width: 100%;
            max-width: 2000px;
            height: 100%;
            max-height: 2000px;
            object-fit: fill;
        }
        .animation {
            width: 100%;
            max-width: 2000px;
            height: 100%;
            max-height: 2000px;
            object-fit: fill;

            /* display: block; */
        }
    }
`;
