import ContainerHome from "../components/ContainerHome";

export default function SignUp() {

    return (
        <ContainerHome text="Já tem uma conta? Faça login!">
            <form>
                <input type="text" placeholder="   email" required />
                <input type="text" placeholder="   senha" required />
                <input type="text" placeholder="   nome" required />
                <input type="text" placeholder="   foto" required />
                <button type="submit">Cadastrar</button>
            </form>
        </ContainerHome>
    );
}