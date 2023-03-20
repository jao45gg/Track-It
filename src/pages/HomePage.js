import ContainerHome from "../components/ContainerHome";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Body } from "../styles/styles";

export default function HomePage({ setUser }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    function login(e) {

        setLoading(true);
        e.preventDefault();

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, {
            email: email,
            password: password
        })
            .then(res => {
                setUser(res.data);
                navigate("/hoje");
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
        <Body backColor="#FFFFFF">
            <ContainerHome isLoading={isLoading}>
                <form onSubmit={login}>
                    <input data-test="email-input" type="email" placeholder="   email" required value={email}
                        onChange={e => setEmail(e.target.value)} disabled={isLoading ? true : false} />
                    <input data-test="password-input" type="password" placeholder="   senha" required value={password}
                        onChange={e => setPassword(e.target.value)} disabled={isLoading ? true : false} />
                    <button data-test="login-btn" type="submit" disabled={isLoading ? true : false}>{isLoading ? <ThreeDots color="#FFFFFF" /> : "Entrar"}</button>
                    <h2 data-test="signup-link" onClick={() => {
                        if (!isLoading)
                            navigate("/cadastro");
                    }}>Não tem uma conta? Cadastre-se!</h2>
                </form>
            </ContainerHome>
        </Body>
    );
}