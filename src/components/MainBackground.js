import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Animation from "./Animation";
import Snowfall from "react-snowfall";
import Marker from "./Marker";
import Modal from "./Modal";


function MainBackground() {
    const [showSnow, setShowSnow] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
    const markerProps = [
        {
            dates: ["12/15", "12/21"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-15-m",
            top: "83",
            left: "8.5",
        },
        {
            dates: ["12/11", "12/24"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-11-q",
            top: "60.5",
            left: "6",
        },
        {
            dates: ["12/04"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-4-x",
            top: "47",
            left: "15",
        },
        {
            dates: ["12/07", "12/16"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-7-u",
            top: "41",
            left: "25",
        },
        {
            dates: ["12/13"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-13-o",
            top: "57.5",
            left: "32",
        },
        {
            dates: ["12/08", "12/19"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-8-t",
            top: "65",
            left: "40",
        },
        {
            dates: ["12/02"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-2-w",
            top: "60",
            left: "52",
        },
        {
            dates: ["12/05", "12/25"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-5-z",
            top: "49",
            left: "46.5",
        },
        {
            dates: ["12/10", "12/22"], // 12/22
            link: "https://www.luganoeventi.ch/it/calendario-avvento-10-r",
            top: "34",
            left: "43",
        },
        {
            dates: ["12/03", "12/18"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-3-y",
            top: "16.5",
            left: "37.7",
        },
        {
            dates: ["12/12", "12/20"], //  12/20
            link: "https://www.luganoeventi.ch/it/calendario-avvento-12-p",
            top: "14",
            left: "63.5",
        },
        {
            dates: ["12/06", "12/23"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-6-v",
            top: "27",
            left: "77",
        },
        {
            dates: ["12/14"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-14-n",
            top: "36",
            left: "73",
        },
        {
            dates: ["12/09"], // 12/09
            link: "https://www.luganoeventi.ch/it/calendario-avvento-9-s",
            top: "45.7",
            left: "68",
        },
        {
            dates: ["12/01", "12/17"],
            link: "https://www.luganoeventi.ch/it/calendario-avvento-1-j",
            top: "44",
            left: "83.5",
        },
    ];

    const titleRef = useRef();
    useEffect(() => {
        setShowSnow(true);
    }, []);

    const getTodayMarkerProps = () => {
        const todayMarkerProps = markerProps.find((marker, index) => {
            const todayDate = new Date();
            const [day, month] = [
                todayDate.getDate(),
                todayDate.getMonth() + 1,
            ];

            return marker.dates.find((markerSavedDate) => {
                const markerDate = new Date(markerSavedDate);
                const [markerDay, markerMonth] = [
                    markerDate.getDate(),
                    markerDate.getMonth() + 1,
                ];

                return day === markerDay && month === markerMonth;
            });
        });
        return todayMarkerProps;
    };

    return (
        <BgContainer>
            {/* <video autoPlay loop muted playsInline className='map-video'>
                <source src='/assets/map.mp4' type='video/mp4'></source>
            </video> */}
            {/* <img src='/assets/map.jpg' alt='main background' />
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
            /> */}
            {getTodayMarkerProps() && (
                <div
                    className='starMarker'
                    onClick={() => {
                        setModalIsOpen(true);
                        document
                            .querySelector("body")
                            .classList.add("bodyOverflow");
                    }}>
                    <Marker
                        top={getTodayMarkerProps().top}
                        left={getTodayMarkerProps().left}
                        link={getTodayMarkerProps().link}
                    />
                </div>
            )}
            {modalIsOpen && (
                <div
                    className='modalContainer'
                    onClick={() => {
                        setModalIsOpen(false);
                    }}>
                    <Modal link={getTodayMarkerProps().link} />
                </div>
            )}
            {modalIsOpen && (
                <div
                    className='close'
                    onClick={() => {
                        setModalIsOpen(false);
                        document
                            .querySelector("body")
                            .classList.remove("bodyOverflow");
                    }}>
                    <img
                        src='/assets/close.svg'
                        alt='close button'
                        className='close-img'
                    />
                </div>
            )}
            {/* <Marker top='44' left='83.5' link='#a link goes here ' /> */}
            {/* {markerProps.map((marker, index) => (
                <Marker
                    key={index + ""}
                    top={marker.top}
                    left={marker.left}
                    link={marker.link}
                />
            ))} */}
            {showSnow && (
                <SnowContainer>
                    <Snowfall
                        snowflakeCount={175}
                        style={
                            {
                                /* background: "rgba(0,0,0,.5)" */
                            }
                        }
                    />
                </SnowContainer>
            )}
            {/* <div className='snowtest'>asdasdasdasdasdasd</div> */}
        </BgContainer>
    );
}

export default MainBackground;
const BgContainer = styled.div`
    cursor: grab;
    .close {
        width: 20px;
        /* max-width: calc((2.5vw * 1920px) / 100vw); */
        position: fixed;
        right: 0.6em;
        top: 0.6em;
        cursor: pointer;
    }

    img {
        /* display: block;
        width: 100%;
        max-width: 1920px; */
        /* height: 1920px; */
    }
    .map-video {
        display: block;
        width: 100%;
        /* max-width: 1920px; */
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
    .snowtest {
        position: absolute;
        top: 0;
        left: 0;
    }

    @media screen and (max-width: 1024px) and (orientation: portrait) {
        img {
            /* height: 100vh;
            width: auto; */
            /* height : auto; */
        }
        .map-video {
            height: 100vh;
            width: auto;
            /* max-height: 2000px; */
        }
        .close-img {
            height: 20px;
        }
        .animation {
        }
        .title {
            bottom: 6vh;
            left: 65vh;
            width: 30vh;
            height: auto;
        }
        .snowtest {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 300px;
            background-color: red;
        }
    }

    @media screen and (max-width: 1024px) and (orientation: landscape) {
        .animation {
        }
    }
`;
const SnowContainer = styled.div``;
