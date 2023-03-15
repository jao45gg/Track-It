import styled from "styled-components";
import logo from "../styles/logo.svg"
import { Link } from "react-router-dom";

export default function ContainerHome({ children, text }) {

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="TrackIt" />
            </Link>
            {children}
            <Link to="/cadastro">
                <h2>{text}</h2>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 8vh 15vw 0 15vw;

    img{
        width: 55vw;
        height: 31vh;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3vh;

        input, button{
            box-sizing: border-box;
            width: 85vw;
            height: 7.5vh;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            margin-top: 1vh;
            font-weight: 400;
            font-size: 2.5vh;
        }

        input {
            background-color: #FFFFFF;
            color: #DBDBDB;
        }

        button {
            background-color: #52B6FF;
            color: #FFFFFF;
        }
    }

    h2 {
        margin-top: 4vh;
        color: #52B6FF;
        font-weight: 400;
        font-size: 1.7vh;
        text-decoration-line: underline;
        font-family: 'Lexend Deca', sans-serif;
    }
`