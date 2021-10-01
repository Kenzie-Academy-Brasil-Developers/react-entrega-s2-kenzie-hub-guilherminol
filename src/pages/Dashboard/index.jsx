import { Redirect } from "react-router-dom";
const Dashboard = ({ isLogged }) => {
  if (!isLogged) return <Redirect to="/"></Redirect>;
  const user = JSON.parse(window.localStorage.getItem("user"));
  return (
    <>
      <h1>Bem vindo, {user.name}</h1>
    </>
  );
};
export default Dashboard;
