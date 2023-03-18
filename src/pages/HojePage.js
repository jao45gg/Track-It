import { useContext } from "react";
import { LevelContext } from "../constant";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import vector from "../styles/Vector.svg"
import { Body } from "../styles/styles";

export default function HojePage() {

    const user = useContext(LevelContext);

    return (
        <Body backColor="#E5E5E5">
            <Header />
            <Container>
                <div className="fixed">
                    <h1>Segunda, 17/05</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </div>
                <main>
                    <Habit>
                        <div>
                            <h1>Ler 1 capítulo de livro</h1>
                            <h2>Sequência atual: 3 dias Seu recorde: 5 dias</h2>
                        </div>
                        <Checkbox>
                            <img src={vector} alt="check" />
                        </Checkbox>
                    </Habit>             
                </main>
            </Container>
            <Footer />
        </Body>
    );
}

const Container = styled.div`
    height: 68vh;
    margin-top: 17vh;
    padding: 0 6vw 0 6vw;
    box-sizing: border-box;
    display: flex;

    main {
        margin-top: 12vh;
        overflow-y: scroll;
        height: 53vh;
    }

    .fixed {
        position: fixed;
    }

    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #126BA5;
        font-size: 3.2vh;
    }

    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #BABABA;
        font-size: 2.3vh;
        margin-top: 1vh;
    }
`

const Habit = styled.div`
    width: 88vw;
    height: 16vh;
    margin-bottom: 1.7vh;
    background-color: #FFFFFF;
    padding: 4mm;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        width: 54vw;
        color: #666666;
        font-size: 2.2vh;
    }

    h2 {
        color: #666666;
        font-size: 1.6vh;
        width: 45vw;
    }
`

const Checkbox = styled.div`
    width: 21vw;
    height: 11.5vh;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E7E7E7;
    border-radius: 5px;

    img {
        width: 10.5vw;
        height: 5vh;
    }
`