import image from "../../images/Tecnology image.png";
import LinearProgress from "@mui/material/LinearProgress";
import { Container } from "./style";
const TechnologyCard = ({ item }) => {
  const { title, status } = item;
  const getValue = () => {
    if (status === "Iniciante") return 33;
    if (status === "Intermediário") return 66;
    return 100;
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
      <button>Remover</button>
    </Container>
  );
};
export default TechnologyCard;
