import styled from "styled-components";
import logo from "../styles/logo.svg"

export default function HomePage() {
    return (
        <Container>
            <img src={logo} alt="TrackIt" />
            <form>
                <input type="text" placeholder="   email" required />
                <input type="text" placeholder="   senha" required />
                <button type="submit">Entrar</button>
            </form>
            <h2>Não tem uma conta? Cadastre-se!</h2>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 12vh 15vw 0 15vw;

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
            height: 8vh;
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