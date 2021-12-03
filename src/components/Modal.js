import React, { useRef } from "react";
import styled from "styled-components";

function Modal({ link }) {
    const backdropRef = useRef();
    const closeRef = useRef();
    const handleClose = (e) => {
        // console.log(e.target);
        backdropRef.current.style.display = "none";
        closeRef.current.style.display = "none";
    };
    return (
        <ModalContainer>
            <div className='backdrop' ref={backdropRef}>
                <div className='popup'>
                    <h1>
                        Complimenti, hai trovato la casella del Calendario
                        dell'Avvento!
                    </h1>
                    <button>
                        <a href={link} target='_blank' rel='noreferrer'>
                            Scopri
                        </a>
                    </button>
                    <p>
                        e approfitta subito della promozione natalizia di oggi!
                    </p>
                </div>
            </div>
        </ModalContainer>
    );
}

export default Modal;

const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    /* border: 2px solid crimson; */
    top: 0;
    left: 0;
    /* opacity: 0; */
    cursor: pointer;
    .backdrop {
        background-color: rgba(0, 0, 0, 0.6);
        height: 100%;
        width: 100%;
        position: relative;
    }
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        width: 400px;
        max-width: 70%;
        height: 300px;
        max-height: 70%;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-row-gap: 1.5rem;
        place-content: center;
        padding: 1em;
        /* transform: translate(-50%, -50%); */
        z-index: 10000000;
        animation: fadeIn 1s;

        h1 {
            font-size: 1.2rem;
            text-align: center;
            color: rgba(0, 0, 0, 0.9);
            font-weight: 600;
        }
        button {
            border: none;
            background-color: hsl(359, 71%, 63%);
            color: whitesmoke;
            width: 70%;
            margin: 0 auto;
            /* padding: 0.8em; */
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
        }
    }

    p {
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }
    animation: fadeIn 0.5s;

    a,
    a:visited {
        text-decoration: none;
        color: white;
    }
    a {
        display: inline-block;
        /* background-color: green; */
        width: 100%;
        padding: 0.8em;
        border-radius: 5px;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
