import styled from "styled-components";
import Trash from "../styles/Trash.svg";
import { useContext } from "react";
import { LevelContext } from "../constant";
import axios from "axios";
import { weekdayChar } from "../constant";

export default function HabitCard({ name, days, id }) {

    const user = useContext(LevelContext);

    function boom() {

        if (window.confirm("Apagar o hábito?") === true) {

            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
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
        <Card>
            <div>
                <h1>{name}</h1>
                <img src={Trash} alt="delete-btn" onClick={boom} />
            </div>
            <div className="btn-days">
            {weekdayChar.map((d,index) => <button key={index} className={days.includes(index) ? "selected" : ""}>{d}</button>)}
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