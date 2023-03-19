import { useContext, useState, useEffect } from "react";
import { LevelContext } from "../constant";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import vector from "../styles/Vector.svg"
import { Body } from "../styles/styles";
import axios from "axios";
import dayjs from "dayjs";

export default function HojePage({ percentage, setPercentage }) {

    const obj = useContext(LevelContext);
    const [habits, setHabits] = useState([]);
    const [habitsCheck, setHabitsCheck] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, {
            headers: {
                "Authorization": `Bearer ${obj.user.token}`
            }
        })
            .then(res => {
                setHabits(res.data);

                let arr = [];
                for (let index = 0; index < res.data.length; index++) {
                    if (res.data[index].done)
                        arr.push(res.data[index].id);
                }
                setHabitsCheck(arr);
            })
            .catch(err => {
                if (err.response.data.details) {
                    err.response.data.details.forEach(element => {
                        alert(element);
                    });
                } else {
                    alert(err.response.data.message);
                }
            })

        let num = 0
        if(habits.length > 0 && habitsCheck.length > 0)
            num = (habitsCheck.length/habits.length) * 100;
        setPercentage(num);

    }, [habitsCheck]);

    function checkHabit(id) {

        if (habitsCheck.includes(id)) {

            let newArr = [];
            for (let index = 0; index < habitsCheck.length; index++) {
                if (habitsCheck[index] !== id)
                    newArr.push(habitsCheck[index])
            }

            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, {
                headers: {
                    "Authorization": `Bearer ${obj.user.token}`
                }
            })
                .then(() => setTimeout(() => setHabitsCheck(newArr), 1000))
                .catch(err => {
                    if (err.response.data.details) {
                        err.response.data.details.forEach(element => {
                            alert(element);
                        });
                    } else {
                        alert(err.response.data.message);
                    }
                })

        } else {

            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, {
                headers: {
                    "Authorization": `Bearer ${obj.user.token}`
                }
            })
                .then(setTimeout(() => setHabitsCheck([...habitsCheck, id]), 1000))
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

    }

    function dia(day) {
        switch (day) {
            case "Monday":
                return "Segunda";
            case "Tuesday":
                return "Terça";
            case "Wednesday":
                return "Quarta";
            case "Thursday":
                return "Quinta";
            case "Friday":
                return "Sexta";
            case "Saturday":
                return "Sábado";
            case "Sunday":
                return "Domingo";
            default:
                return "Error"
        }
    }

    return (
        <Body backColor="#E5E5E5">
            <Header />
            <Container>
                <div className="fixed">
                    <h1>{`${dia(dayjs().format("dddd"))}, ${dayjs().format("DD/MM")}`}</h1>
                    <h2 className={percentage === 0 ? "" : "done"}>{percentage === 0 ? "Nenhum hábito concluído ainda" : `${percentage}% dos hábitos concluídos`}</h2>
                </div>
                <main>
                    {habits.map(h =>
                        <Habit key={h.id}>
                            <div>
                                <h1>{h.name}</h1>
                                <h2>
                                    Sequência atual: <span className={h.done ? "done" : ""}>{h.currentSequence} dias</span> <br />
                                    Seu recorde: <span className={h.currentSequence === h.highestSequence && h.currentSequence !== 0 ? "done" : ""}> {h.highestSequence} dias </span>
                                </h2>
                            </div>
                            <Checkbox backColor={h.done ? "done" : ""} onClick={() => checkHabit(h.id)}>
                                <img src={vector} alt="check" />
                            </Checkbox>
                        </Habit>)}
                </main>
            </Container>
            <Footer value={percentage} />
        </Body>
    );
}

const Container = styled.div`
    height: 68vh;
    margin-top: 17vh;
    padding: 0 6vw 0 6vw;
    box-sizing: border-box;
    display: flex;

    .done {
        color: #8FC549;
    } 

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
        flex-wrap: wrap;
        max-height: 3vh;
        max-width: 54vw;
        color: #666666;
        font-size: 2.5vh;
        overflow-y: auto;
    }

    h2 {
        color: #666666;
        font-size: 1.7vh;
        width: 44vw;

        .done {
            color: #8FC549;
        }   
    }
`

const Checkbox = styled.div`
    width: 21vw;
    height: 11.5vh;
    background-color: ${props => props.backColor === "done" ? "#8FC549" : "#EBEBEB"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => props.backColor === "done" ? "0" : "1px solid #E7E7E7"};
    border-radius: 5px;

    img {
        width: 10.5vw;
        height: 5vh;
    }
`