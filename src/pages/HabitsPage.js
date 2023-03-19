import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import styled from "styled-components";
import { Body } from "../styles/styles"
import { useEffect, useState } from "react";
import CreateHabitCard from "../components/CreateHabitCard.js";
import HabitCard from "../components/HabitCard.js";
import { useContext } from "react";
import { LevelContext } from "../constant";
import axios from "axios";

export default function HabitsPage() {

    const obj = useContext(LevelContext);
    const [habits, setHabits] = useState([]);
    const [habitsCreation, setHabitsCreation] = useState(false);
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, {
            headers: {
                "Authorization": `Bearer ${obj.user.token}`
            }
        })
            .then(res => { setHabits(res.data) })
            .catch(err => {
                if (err.response.data.details) {
                    err.response.data.details.forEach(element => {
                        alert(element);
                    });
                } else {
                    alert(err.response.data.message);
                }
            })
    }, [habits])

    return (
        <Body backColor="#E5E5E5">
            <Header />
            <Container>
                <div>
                    <h1>Meus hábitos</h1>
                    <button data-test="habit-create-btn" onClick={() => setHabitsCreation(true)}>+</button>
                </div>
                <main>
                    {habitsCreation && <CreateHabitCard name={name} setName={setName} days={days} setDays={setDays}
                        setHabitsCreation={setHabitsCreation} setHabits={setHabits} habits={habits} />}
                    {habits.map((h, index) =>
                        <HabitCard key={index} name={h.name} days={h.days} id={h.id} />
                    )}
                </main>
                {habits.length <= 0 && <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>}
            </Container>
            <Footer />
        </Body>
    );
}

const Container = styled.div`
    padding: 0 5vw 0 5vw;
    box-sizing: border-box;
    margin-top: 14.5vh;
    display: flex;
    flex-direction: column;

    main {
        max-height: 57vh;
        overflow-y: auto;
        margin-top: 2vh;
    }

    button {
        width: 12vw;
        height: 6vh;
        background-color: #52B6FF;
        border-radius: 5px;
        border: 0;
        font-size: 3vh;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

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
        margin-top: 2vh;
    }

`;