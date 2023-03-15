import ContainerHome from "../components/ContainerHome";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function signUp(e) {

        setLoading(true);
        e.preventDefault();

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, {
            email: email,
            name: name,
            image: image,
            password: password
        })
            .then(() => navigate("/"))
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
        <ContainerHome loading={loading}>
            <form onSubmit={signUp}>
                <input type="email" placeholder="   email" required value={email}
                    onChange={e => setEmail(e.target.value)} disabled={loading ? true : false} />
                <input type="password" placeholder="   senha" required value={password}
                    onChange={e => setPassword(e.target.value)} disabled={loading ? true : false} />
                <input type="text" placeholder="   nome" required value={name}
                    onChange={e => setName(e.target.value)} disabled={loading ? true : false} />
                <input type="text" placeholder="   foto" required value={image}
                    onChange={e => setImage(e.target.value)} disabled={loading ? true : false} />
                <button type="submit" disabled={loading ? true : false}>{loading ? <ThreeDots color="#FFFFFF" /> : "Cadastrar"}</button>
                <h2 onClick={() => {
                    if (!loading)
                        navigate("/")
                }}>Já tem uma conta? Faça login!</h2>
            </form>
        </ContainerHome>
    );
}