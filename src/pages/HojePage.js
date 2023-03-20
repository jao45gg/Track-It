import { useContext, useState, useEffect } from "react";
import { LevelContext } from "../constant";
import Header from "../components/Header";
import Footer from "../components/Footer";
import vector from "../styles/Vector.svg";
import { Body } from "../styles/styles";
import axios from "axios";
import dayjs from "dayjs";
import { Container, Habit, Checkbox } from "../styles/styles";

export default function HojePage({ percentage, setPercentage }) {

    const obj = useContext(LevelContext);
    const [habits, setHabits] = useState([]);
    const [habitsCheck, setHabitsCheck] = useState([]);

    function error(err) {
        if (err.response.data.details) {
            err.response.data.details.forEach(element => {
                alert(element);
            });
        } else {
            alert(err.response.data.message);
        }
    }

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
            .catch(err => { error(err); })

        let num = 0
        if (habits.length > 0 && habitsCheck.length > 0)
            num = (habitsCheck.length / habits.length) * 100;
        setPercentage(num);

    }, [habitsCheck, habits.length, setPercentage, obj.user.token]);

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
                .catch(err => { error(err); })

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
                    <h1 data-test="today">{`${dia(dayjs().format("dddd"))}, ${dayjs().format("DD/MM")}`}</h1>
                    <h2 data-test="today-counter" className={percentage === 0 ? "" : "done"}>
                        {percentage === 0 ? "Nenhum hábito concluído ainda" : `${percentage.toFixed(2)}% dos hábitos concluídos`}</h2>
                </div>
                <main>
                    {habits.map(h =>
                        <Habit data-test="today-habit-container" key={h.id}>
                            <div>
                                <h1 data-test="today-habit-name">{h.name}</h1>
                                <h2 data-test="today-habit-sequence">
                                    Sequência atual: <span className={h.done ? "done" : ""}>{h.currentSequence} dias</span> <br />
                                </h2>
                                <h2 data-test="today-habit-record">
                                    Seu recorde: <span className={h.currentSequence === h.highestSequence && h.currentSequence !== 0 ?
                                        "done" : ""}> {h.highestSequence} dias </span>
                                </h2>
                            </div>
                            <Checkbox data-test="today-habit-check-btn" backColor={h.done ? "done" : ""} onClick={() => checkHabit(h.id)}>
                                <img src={vector} alt="check" />
                            </Checkbox>
                        </Habit>)}
                </main>
            </Container>
            <Footer value={percentage} />
        </Body>
    );
}