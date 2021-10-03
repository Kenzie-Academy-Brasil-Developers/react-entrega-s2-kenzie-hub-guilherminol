import { Redirect, useHistory } from "react-router-dom";
import { Container, Tecnologias, TechContainer } from "./style";
import TechnologyCard from "../../components/TechnologyCard";
import { Button } from "../../components/Button/style.js";
import { useState } from "react";
import Header from "../../components/Header";

const Dashboard = ({ setIsLogged, isLogged }) => {
  const history = useHistory();
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );

  if (!isLogged) return <Redirect to="/"></Redirect>;
  const techniqueList = user.techs;
  return (
    <Container>
      <Header setIsLogged={setIsLogged}></Header>
      <h1>Bem vindo, {user.name.split(" ")[0]}</h1>
      <Tecnologias>
        <h2>Suas Tecnologias: </h2>
        <TechContainer>
          {techniqueList.map((item, key) => {
            return (
              <TechnologyCard
                setUser={setUser}
                key={key}
                item={item}
              ></TechnologyCard>
            );
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
