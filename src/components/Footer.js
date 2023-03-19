import { useContext } from "react";
import styled from "styled-components";
import { LevelContext } from "../constant";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Footer() {

    const obj = useContext(LevelContext);

    return (
        <DivFooter data-test="menu">
            <Link data-test="habit-link" to="/habitos" style={{ textDecoration: "none" }}>
                <h1>Hábitos</h1>
            </Link>
            <div>
                <Link data-test="today-link" to="/hoje" style={{ textDecoration: "none" }}>
                    <CircularProgressbar text="Hoje" background backgroundPadding={6} value={obj.percentage} styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        trailColor: "transparent",
                        pathColor: "#FFFFFF",
                        textColor: "#FFFFFF"
                    })} />
                </Link>
            </div>
            <Link data-test="history-link" to="/historico" style={{ textDecoration: "none" }}>
                <h1>Histórico</h1>
            </Link>
        </DivFooter>
    );
}

const DivFooter = styled.div`
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
        width: 27vw;
        height: 16vh;
        margin-bottom: 5vh;
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
        font-size: 2.5vh;
        color: #52B6FF;
    }
`;