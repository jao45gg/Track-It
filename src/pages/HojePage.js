import { useContext } from "react";
import { LevelContext } from "../constant";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HojePage() {

    const user = useContext(LevelContext);

    return (
        <Body>
            <Header />
            <Footer />
        </Body>
    );
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
`
