import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Animation from "./Animation";
import Snowfall from "react-snowfall";

function MainBackground() {
    const [showSnow, setShowSnow] = useState(false);
    const animations = [
        "albero",
        "casette",
        "fontana",
        "forziere",
        "luci_banca",
        "luci_municipio",
        "luci_dx",
        "luci_sx",
        "luci_dx_top",
        "tetto",
    ];

    const titleRef = useRef();
    useEffect(() => {
        setShowSnow(true);
       
    }, [])

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
            <img
                ref={titleRef}
                src='/assets/title.png'
                alt='fontana title'
                className='title'
            />
               showSnow &&  <Snowfall snowflakeCount={250}/>
         
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
    .animation,
    .title {
        /* border : 2px dashed black; */
        position: absolute;
    }
    .title {
        bottom: 4vw;
        right: 4vw;
        width: 30vw;
        height: auto;
    }
    .albero {
        width: 14vw;
        height: 16vw;
        top: 25vw;
        left: 33vw;
    }
    .casette {
        width: 10vw;
        height: 12vw;
        top: 43.2vw;
        right: 32.2vw;
    }
    .fontana {
        width: 8.4vw;
        height: 10.4vw;
        top: 36.6vw;
        right: 15.8vw;
    }
    .forziere {
        width: 8vw;
        height: 8.7vw;
        bottom: 27.5vw;
        right: 35.8vw;
    }
    .luci_banca {
        width: 20vw;
        height: 7vw;
        top: 7.6vw;
        left: 34.1vw;
    }
    .luci_municipio {
        /* background-color: rgba(0, 0, 0, 0.3); */
        width: 23vw;
        height: 23vw;
        top: 39.6vw;
        left: 37vw;
    }
    .luci_dx_top {
        width: 42.9vw;
        height: 30.4vw;
        top: 12.3vw;
        left: 37.9vw;
    }
    .luci_dx {
        /* background-color: rgba(0, 0, 0, 0.7); */
        width: 48vw;
        height: 47vw;
        top: -0.6vw;
        right: 0.19vw;
    }
    .luci_sx {
        /* background-color: rgba(0, 0, 0, 0.9); */
        width: 29vw;
        height: auto;
        top: 7vw;
        left: 0.1vw;
    }

    .tetto {
        width: 17vw;
        height: 17vw;
        top: 21.9vw;
        left: 14.7vw;
        /* transform: rotate(3deg); */
    }
    @media screen and (max-width: 1024px) and (orientation: portrait) {
        img {
            height: 100vh;
            width: auto;
            /* height : auto; */
        }
        .animation {
        }
        .title {
            bottom: 6vh;
            left: 65vh;
            width: 30vh;
            height: auto;
        }
        .albero {
            width: 14vh;
            height: 16vh;
            top: 25vh;
            left: 33vh;
        }
        .casette {
            width: 13vh;
            height: 15vh;
            top: 42.2vh;
            left: 57vh;
        }
        .fontana {
            width: 8.4vh;
            height: 10.4vh;
            top: 37.3vh;
            left: 75.5vh;
        }
        .forziere {
            width: 8vh;
            height: 8.7vh;
            bottom: 28vh;
            left: 55.6vh;
        }
        .luci_banca {
            /* border : 2px solid black; */
            width: 20vh;
            height: 7vh;
            top: 7.6vh;
            left: 35.3vh;
        }
        .luci_municipio {
            /* background-color: rgba(0, 0, 0, 0.3); */
            width: 23vh;
            height: 23vh;
            top: 39.6vh;
            left: 37.3vh;
        }
        .luci_dx_top {
            width: 42.9vh;
            height: 30.4vh;
            top: 12.6vh;
            left: 38.5vh;
        }
        .luci_dx {
            /* background-color: rgba(0, 0, 0, 0.7); */
            width: 48vh;
            height: 48vh;
            top: -1vh;
            left: 51.8vh;
        }
        .luci_sx {
            /* background-color: rgba(0, 0, 0, 0.9); */
            width: 30vh;
            height: auto;
            top: 6vh;
            left: 0.1vh;
        }
        .tetto {
            width: 17vh;
            height: 17vh;
            top: 21.9vh;
            left: 14.7vh;
            /* transform: rotate(3deg); */
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
    /* fix fontana display on Ipad pro lanscape mode */
    /* fix forziere display on Ipad pro lanscape mode */
    /* fix luci-dx-top display on Ipad pro lanscape mode */
`;

const SnowContainer = styled.div`
    /* height: 100vh; */
`;
