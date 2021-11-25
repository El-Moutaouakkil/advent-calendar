import React from "react";
import styled from "styled-components";

function MainBackground() {
    return (
        <BgContainer>
            <img src='/assets/map.jpg' alt='main background' />
            <video autoPlay loop muted /* width="320" */ className='animation'>
                <source
                    src='/assets/animations/albero.webm'
                    type='video/webm'></source>
            </video>
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
            height: 100%;
        }
        .animation {
            width: 90%;
            height: 100%;
            /* display: block; */
        }
    }
`;
