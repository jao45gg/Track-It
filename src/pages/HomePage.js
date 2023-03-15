import ContainerHome from "../components/ContainerHome";

export default function HomePage() {
    return (
        <ContainerHome text="Não tem uma conta? Cadastre-se!">
            <form>
                <input type="text" placeholder="   email" required />
                <input type="text" placeholder="   senha" required />
                <button type="submit">Entrar</button>
            </form>
        </ContainerHome>
    );
}