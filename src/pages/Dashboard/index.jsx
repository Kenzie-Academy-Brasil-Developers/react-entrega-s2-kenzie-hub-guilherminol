import { Redirect, useHistory } from "react-router-dom";
import { Container, Tecnologias, TechContainer } from "./style";
import TechnologyCard from "../../components/TechnologyCard";
import { Button } from "../../components/Button/style.js";

const Dashboard = ({ isLogged }) => {
  const history = useHistory();

  if (!isLogged) return <Redirect to="/"></Redirect>;
  const user = JSON.parse(window.localStorage.getItem("user"));
  const techniqueList = user.techs;
  return (
    <Container>
      <h1>Bem vindo, {user.name.split(" ")[0]}</h1>
      <Tecnologias>
        <h2>Suas Tecnologias: </h2>
        <TechContainer>
          {techniqueList.map((item, key) => {
            return <TechnologyCard key={key} item={item}></TechnologyCard>;
          })}
        </TechContainer>

        <Button onClick={() => history.push("/Dashboard/AddTech")}>
          Adicionar Tecnologia
        </Button>
      </Tecnologias>
    </Container>
  );
};
export default Dashboard;
