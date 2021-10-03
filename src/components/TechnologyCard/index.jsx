import image from "../../images/Tecnology image.png";
import LinearProgress from "@mui/material/LinearProgress";
import { Container } from "./style";
import axios from "axios";
const TechnologyCard = ({ item }) => {
  const userToken = JSON.parse(window.localStorage.getItem("token"));
  const { title, status, id } = item;
  const getValue = () => {
    if (status === "Iniciante") return 33;
    if (status === "Intermediário") return 66;
    return 100;
  };
  const removeTech = (itemId) => {
    axios({
      method: "DELETE", //you can set what request you want to be
      url: `https://kenziehub.herokuapp.com/users/techs/${itemId}`,
      headers: {
        Authorization: "Bearer " + userToken,
      },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <img src={image} alt="Tecnology representation" />
      <h3>{title}</h3>
      <LinearProgress
        variant="determinate"
        color="success"
        value={getValue()}
      />
      <button onClick={() => removeTech(id)}>Remover</button>
    </Container>
  );
};
export default TechnologyCard;
