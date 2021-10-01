import { Header, Container, Content } from "./style";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button/style";
const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <Header>
        <h2>KenzieHub</h2>
        <nav>
          <ul>
            <li>
              <Link to="/contact">Contatos</Link>
            </li>
            <li>
              <Button onClick={() => history.push("/login")}>Login</Button>
            </li>
          </ul>
        </nav>
      </Header>
      <Content>
        <h1>
          Bem vindo ao <span>KenzieHub</span> - a rede social da Kenzie Academy,
          escola que mais cresce no Brasil !
        </h1>
        <h4>
          Compartilhe suas novas habilidades com seus amigos do curso e compita
          de modo saudável para se desenvolver como Dev
        </h4>
        <Button onClick={() => history.push("/register")} fontSize={20}>
          Quero me registar
        </Button>
      </Content>
    </Container>
  );
};
export default Home;
