import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Animation from "./Animation";
import Snowfall from "react-snowfall";
import Marker from "./Marker";

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
            dates: ["12/10", "11/30"], // 11/30
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
            {getTodayMarkerProps() && (
                <Marker
                    top={getTodayMarkerProps().top}
                    left={getTodayMarkerProps().left}
                    link={getTodayMarkerProps().link}
                />
            )}
            {/* <Marker top='44' left='83.5' link='#a link goes here ' /> */}

            {showSnow && (
                <div className='SnowContainer'>
                    <Snowfall snowflakeCount={175} />
                </div>
            )}
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
