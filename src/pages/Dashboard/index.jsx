import { Redirect } from "react-router-dom";
import { Container } from "./style";
const Dashboard = ({ isLogged }) => {
  if (!isLogged) return <Redirect to="/"></Redirect>;
  const user = JSON.parse(window.localStorage.getItem("user"));
  return (
    <Container>
      <h1>Bem vindo, {user.name.split(" ")[0]}</h1>
    </Container>
  );
};
export default Dashboard;
