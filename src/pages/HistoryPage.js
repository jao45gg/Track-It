import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function HistoryPage() {
    return (
        <>
            <Header />
            <Container>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`

    padding: 0 5vw 0 5vw;
    box-sizing: border-box;

    margin-top: 16vh;

    h1 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #126BA5;
        font-size: 3vh;
    }

    h2 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #666666;
        font-size: 2.2vh;
        margin-top: 3vh;
    }

`;