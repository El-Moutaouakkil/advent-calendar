import "./App.css";
import MainBackground from "./components/MainBackground";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Marker from "./components/Marker";
import Modal from "./components/Modal";
import Snowfall from "react-snowfall";

function App() {
    return (
        <div className='App'>
           
            {/* <SnowContainer>
                <Snowfall />
            </SnowContainer> */}
            <MainBackground />
            {/* <div className="modal"></div> */}
            {/* <div className='modal'>
                <Modal link='https://www.google.com/' />
            </div> */}
        </div>
    );
}

export default App;
const SnowContainer = styled.div`
    width: 100vw;
`;

