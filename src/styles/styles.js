import styled from "styled-components";

export const Body = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.backColor};
`;

export const Container = styled.div`
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
`;

export const Habit = styled.div`
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
        height: 3.5vh;
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
`;

export const Checkbox = styled.div`
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
`;