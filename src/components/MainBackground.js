import React from "react";
import styled from "styled-components";

function MainBackground() {
    return (
        <BgContainer>
            <img src='/assets/map.jpg' alt='main background' />
            <img src='/assets/fontana2.gif' alt='fontana' className='fontana' />
        </BgContainer>
    );
}

export default MainBackground;

const BgContainer = styled.div`
    height: 100vh;
    position: relative;
    img {
        width: 700px;
        display: block;
    }

    .fontana {
        position: absolute;
        top: 0;
        left: 0;
        /* border : 2px solid orange; */
    }
    @media all and (min-width: 469px) {
        img {
            width: 100%;
            height: 100%;
        }
    }
`;
