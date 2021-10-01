import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import { useEffect, useState } from "react";
const Routes = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) return setIsLogged(true);
  }, [isLogged]);
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/Register">
        <Register isLogged={isLogged} />
      </Route>
      <Route path="/Login">
        <Login isLogged={isLogged} setIsLogged={setIsLogged}></Login>
      </Route>
      <Route path="/Dashboard">
        <Dashboard isLogged={isLogged}></Dashboard>
      </Route>
    </Switch>
  );
};
export default Routes;
