import { useContext } from "react";
import styled from "styled-components";
import { LevelContext } from "../constant";
import trackIt from "../styles/TrackIt.svg"

export default function Header() {

    const user = useContext(LevelContext);

    return (
        <DivHeader>
            <img className="logo" src={trackIt} alt="TrackIt"/>
            <img className="usrImage" src={user.image} alt={user.name}/>
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

    .logo {
        width: 30vw;
        height: 15vh;
    }

    .usrImage {
        width: 15vw;
        height: 8.5vh;
        border-radius: 98.5px;
    }
`;


const body = styled.body