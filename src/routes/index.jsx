import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import AddTech from "../pages/AddTech";
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
      <Route exact path="/Dashboard">
        <Dashboard setIsLogged={setIsLogged} isLogged={isLogged}></Dashboard>
      </Route>
      <Route path="/Dashboard/AddTech">
        <AddTech isLogged={isLogged}></AddTech>
      </Route>
    </Switch>
  );
};
export default Routes;
