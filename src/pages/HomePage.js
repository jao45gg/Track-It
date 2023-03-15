import ContainerHome from "../components/ContainerHome";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function HomePage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    function login(e) {

        setLoading(true);
        e.preventDefault();

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, {
            email: email,
            password: password
        })
            .then(res => { setUser(res.data); navigate("/cadastro"); })
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
        <ContainerHome>
            <form onSubmit={login}>
                <input type="email" placeholder="   email" required value={email}
                    onChange={e => setEmail(e.target.value)} disabled={loading ? true : false} />
                <input type="password" placeholder="   senha" required value={password}
                    onChange={e => setPassword(e.target.value)} disabled={loading ? true : false} />
                <button type="submit" disabled={loading ? true : false}>{loading ? <ThreeDots color="#FFFFFF" /> : "Entrar"}</button>
                <Link to="/cadastro">
                    <h2>Não tem uma conta? Cadastre-se!</h2>
                </Link>
            </form>
        </ContainerHome>
    );
}