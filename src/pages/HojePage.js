import { useContext } from "react";
import { LevelContext } from "../constant";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import vector from "../styles/Vector.svg"

export default function HojePage() {

    const user = useContext(LevelContext);

    return (
        <Body>
            <Header />
            <Container>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
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
                    <Habit>
                        <div>
                            <h1>Ler 1 capítulo de livro</h1>
                            <h2>Sequência atual: 3 dias Seu recorde: 5 dias</h2>
                        </div>
                        <Checkbox>
                            <img src={vector} alt="check" />
                        </Checkbox>
                    </Habit>
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

const Body = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
`

const Container = styled.div`
    height: 350px;
    background-color: peru;
    margin-top: 18vh;
    padding: 0 20px 0 20px;
    box-sizing: border-box;

    main {
       height: 300px;
       overflow-y: scroll;
    }

    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #126BA5;
        font-size: 23px;
    }

    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #BABABA;
        font-size: 18px;
        margin-top: 1vh;
    }
`

const Habit = styled.div`
    height: auto;
    margin-top: 28px;
    background-color: #FFFFFF;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        width: 180px;
        color: #666666;
        font-size: 17px;
    }

    h2 {
        color: #666666;
        font-size: 12px;
        width: 150px;
    }
`

const Checkbox = styled.div`
    width: 69px;
    height: 69px;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`