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
            <MainBackground />
        </div>
    );
}

export default App;
