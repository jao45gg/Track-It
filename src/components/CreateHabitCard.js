import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { LevelContext, weekdayChar } from "../constant";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function CreateHabitCard({ name, setName, days, setDays, setHabitsCreation, setHabits, habits }) {

    const [isLoading, setLoading] = useState(false);
    const obj = useContext(LevelContext);

    function createHabit(e) {

        setLoading(true);
        e.preventDefault();

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, {
            name: name,
            days: days
        }, {
            headers: {
                "Authorization": `Bearer ${obj.user.token}`
            }
        })
            .then(res => {
                setHabits([...habits, res.data]);
                setLoading(false);
                setName("");
                setDays([]);
                setHabitsCreation(false);
            })
            .catch(err => {
                if (err.response.data.details) {
                    err.response.data.details.forEach(element => {
                        alert(element);
                    });
                } else {
                    alert(err.response.data.message);
                }
                setLoading(false);
            })
    }

    return (
        <HabitCard data-test="habit-create-container">
            <form onSubmit={createHabit}>
                <input data-test="habit-name-input" disabled={isLoading ? true : false} type="text" placeholder="  nome do hábito" required value={name} onChange={(e => setName(e.target.value))} />
                <div className="btn-days">
                    {weekdayChar.map((d, index) => <button data-test="habit-day" key={index} type="button" disabled={isLoading ? true : false} className={days.includes(index) ? "selected" : ""} onClick={() => {

                        if (days.includes(index)) {

                            let newArr = [];
                            for (let i = 0; i < days.length; i++) {
                                if (days[i] !== index)
                                    newArr.push(days[i])
                            }
                            setDays(newArr);
                        } else {
                            setDays([...days, index]);
                        }

                    }
                    }>{d}</button>)}
                </div>
                <div className="btn-actions">
                    <button data-test="habit-create-cancel-btn" disabled={isLoading ? true : false} onClick={() => setHabitsCreation(false)}>Cancelar</button>
                    <button data-test="habit-create-save-btn" disabled={isLoading ? true : false} type="submit" className="save">{isLoading ? <ThreeDots height={40}
                        width={40} color="#FFFFFF" /> : "Salvar"}</button>
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