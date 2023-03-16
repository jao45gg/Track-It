import { useContext } from "react";
import styled from "styled-components";
import { LevelContext } from "../constant";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {

    const user = useContext(LevelContext);

    return (
        <DivHeader>
            <h1>Hábitos</h1>
            <div>
                <CircularProgressbar text="Hoje" background backgroundPadding={6} value={66} styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    trailColor: "transparent",
                    pathColor: "#FFFFFF",
                    textColor: "#FFFFFF"
                })} />
            </div>
            <h1>Histórico</h1>
        </DivHeader>
    );
}

const DivHeader = styled.div`
    background-color: #FFFFFF;
    width: 100vw;
    height: 12vh;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw 0 10vw;
    box-sizing: border-box;

    div {
        width: 91px;
        height: 91px;
        margin-bottom: 8vh;
    }

    .logo {
        width: 30vw;
        height: 15vh;
    }

    .usrImage {
        width: 15vw;
        height: 8.5vh;
        border-radius: 98.5px;
    }

    h1 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
    }
`;