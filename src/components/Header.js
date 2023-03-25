import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LevelContext } from "../constant";
import trackIt from "../styles/assets/TrackIt.svg";

export default function Header() {

    const obj = useContext(LevelContext);

    return (
        <DivHeader data-test="header">
            <Link to="/">
                <img className="logo" src={trackIt} alt="TrackIt" />
            </Link>
            <img className="usrImage" src={obj.user.image} alt={obj.user.name} />
        </DivHeader>
    );
}

const DivHeader = styled.div`
    background-color: #126BA5;
    width: 100vw;
    height: 12vh;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw 0 5vw;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    .logo {
        width: 30vw;
        height: 15vh;
    }

    .usrImage {
        width: 45px;
        height: 45px;
        border-radius: 98.5px;
    }
`;