import "./App.css";
import MainBackground from "./components/MainBackground";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Marker from "./components/Marker";
import Modal from "./components/Modal";
import Snowfall from "react-snowfall";
import MyMarker from "./components/MyMarker";

function App() {
    return (
        <div className='App'>
            <MainBackground />
            {/* <Snowfall snowflakeCount={500} style={{ width: "822px" }} /> */}

            {/* <SnowContainer></SnowContainer> */}
        </div>
    );
}

export default App;
const SnowContainer = styled.div`
    width: 50vw;
    height: 100vh;
    background-color: orange;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;

`;
