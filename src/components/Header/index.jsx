import { Link, useHistory } from "react-router-dom";
import { Button } from "../Button/style";
import { Headerstyle } from "./style";
const Header = ({ setIsLogged }) => {
  const history = useHistory();
  const logOff = () => {
    window.localStorage.clear();
    setIsLogged(false);
    history.push("/");
  };
  return (
    <Headerstyle>
      <h2>KenzieHub</h2>
      <nav>
        <ul>
          <li>
            <Link to="/contact">Contatos</Link>
          </li>
          <li>
            <Button onClick={logOff}>Sair</Button>
          </li>
        </ul>
      </nav>
    </Headerstyle>
  );
};

export default Header;
