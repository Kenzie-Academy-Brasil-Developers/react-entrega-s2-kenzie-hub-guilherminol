import { TextField } from "@material-ui/core";
import { Button } from "../../components/Button/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, Title, Container } from "./style.js";
import { Link, Redirect, useHistory } from "react-router-dom";
import api from "../../services/api.js";
import imageProgrammer from "../../images/Programmer.png";

const Login = ({ isLogged, setIsLogged }) => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório"),
    senha: yup.string().required("Campo Obrigatório"),
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    const user = { email: data.email, password: data.senha };
    api
      .post("/sessions", user)
      .then((response) => {
        window.localStorage.setItem(
          "token",
          JSON.stringify(response.data.token)
        );
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
        setIsLogged(true);
      })
      .then()
      .catch((error) => {
        alert(error.message);
      });
  };
  if (isLogged) {
    return <Redirect to="/Dashboard"></Redirect>;
  }
  return (
    <Container>
      <img src={imageProgrammer} alt="Programmer codding" />
      <div>
        <Title>
          {" "}
          Bem vindo de volta a <span>Kenzie</span> <br /> Faça seu Login!
        </Title>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>
            <p>
              Email: <span>{errors.email?.message}</span>
            </p>
            <TextField size="small" label="Email" {...register("email")} />
          </label>

          <label>
            <p>
              Senha: <span>{errors.senha?.message}</span>
            </p>
            <TextField size="small" label="Senha" {...register("senha")} />
          </label>

          <Link to="/Register">Não é inscrito? Faça sua inscrição</Link>

          <Button type="submit" onClick={history.push("/Login")}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default Login;
