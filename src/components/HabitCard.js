import styled from "styled-components";
import Trash from "../styles/assets/Trash.svg";
import { useContext } from "react";
import { LevelContext } from "../constant";
import axios from "axios";
import { weekdayChar } from "../constant";

export default function HabitCard({ name, days, id }) {

    const obj = useContext(LevelContext);

    function boom() {

        if (window.confirm("Apagar o hábito?") === true) {

            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
                headers: {
                    "Authorization": `Bearer ${obj.user.token}`
                }
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
        }
    }

    return (
        <Card data-test="habit-container">
            <div>
                <h1 data-test="habit-name">{name}</h1>
                <img data-test="habit-delete-btn" src={Trash} alt="delete-btn" onClick={boom} />
            </div>
            <div className="btn-days">
            {weekdayChar.map((d,index) => <button data-test="habit-day" key={index} className={days.includes(index) ? "selected" : ""}>{d}</button>)}
            </div>
        </Card>
    );
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
    background-color: #FFFFFF;
    padding: 3.3vh;
    box-sizing: border-box;

    img {
        width: 13px;
        height: 15px;
    }

    h1 {
        color: #666666;
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
`;