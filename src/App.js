import "./App.css";
import MainBackground from "./components/MainBackground";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Marker from "./components/Marker";

function App() {
    return (
        <div className='App'>
            {/* <h1>title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptate, ipsum quia minus reprehenderit est?</p> */}
            <MainBackground />
            {/* <IconContainer>
                <FontAwesomeIcon icon={faStar} color='orange' size='lg' />
                <div className='popup'>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
            </IconContainer> */}
        </div>
    );
}

export default App;
const IconContainer = styled.div`
    /* width: 100vw;
    height: 50vh;
    background-color: lightcoral;
    position: relative;
    .popup {
        background-color: white;
        display: inline-block;
        box-shadow: 2px 2px 2px gray;
        padding: 3em;
        position: absolute;
        top: 0;
        left: 10em;
    } */
`;
