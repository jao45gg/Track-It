import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { LevelContext } from "../constant";
import axios from "axios";

export default function CreateHabitCard({ setHabitsCreation, setHabits, habits }) {

    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const user = useContext(LevelContext);

    function createHabit(e) {

        e.preventDefault();

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, {
            name: name,
            days: days
        }, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
            .then((res) => { setHabits([...habits, res.data]) })
            .catch(err => {
                if (err.response.data.details) {
                    err.response.data.details.forEach(element => {
                        alert(element);
                    });
                } else {
                    alert(err.response.data.message);
                }
            })
    }

    return (
        <HabitCard>
            <form onSubmit={createHabit}>
                <input type="text" placeholder="  nome do hábito" required value={name} onChange={(e => setName(e.target.value))} />
                <div className="btn-days">
                    <button type="button" className={days.includes(7) ? "selected" : ""} onClick={() => setDays([...days, 7])}>D</button>
                    <button type="button" className={days.includes(1) ? "selected" : ""} onClick={() => setDays([...days, 1])}>S</button>
                    <button type="button" className={days.includes(2) ? "selected" : ""} onClick={() => setDays([...days, 2])}>T</button>
                    <button type="button" className={days.includes(3) ? "selected" : ""} onClick={() => setDays([...days, 3])}>Q</button>
                    <button type="button" className={days.includes(4) ? "selected" : ""} onClick={() => setDays([...days, 4])}>Q</button>
                    <button type="button" className={days.includes(5) ? "selected" : ""} onClick={() => setDays([...days, 5])}>S</button>
                    <button type="button" className={days.includes(6) ? "selected" : ""} onClick={() => setDays([...days, 6])}>S</button>
                </div>
                <div className="btn-actions">
                    <button onClick={() => setHabitsCreation(false)}>Cancelar</button>
                    <button type="submit" className="save">Salvar</button>
                </div>
            </form>
        </HabitCard>
    );
}

const HabitCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
    background-color: #FFFFFF;
    padding: 3.3vh;
    box-sizing: border-box;

    input {
        width: 78vw;
        height: 8vh;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 2.7vh;
    }

    .btn-days {

        margin-top: 2vh;
        display: flex;
        width: 70vw;

        .selected {
            background-color: #CFCFCF;
            border: 1px solid #CFCFCF;
        }

        button {
            width: 9vw;
            height: 5vh;
            background-color: #FFFFFF;
            border: 1px solid #D5D5D5;
            font-size: 2.7vh;
            color: #DBDBDB;
        }
    }

    .btn-actions {

        margin-top: 4.4vh;
        display: flex;
        justify-content: flex-end;

        button {
            width: 26vw;
            height: 6vh;
            background-color: #FFFFFF;
            border: 0;
            font-size: 2.2vh;
            color: #52B6FF;
        }

        .save {
            background-color: #52B6FF;
            color: #FFFFFF;
            margin-left: 4.3vw;
        }
    }
`;