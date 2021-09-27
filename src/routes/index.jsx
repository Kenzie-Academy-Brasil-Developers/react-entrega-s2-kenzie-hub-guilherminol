import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useEffect, useState } from "react";
const Routes = () => {
  const [isLogged, setisLogged] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) return setisLogged(true);
  }, [isLogged]);
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/Login">
        <Login></Login>
      </Route>
    </Switch>
  );
};
export default Routes;
