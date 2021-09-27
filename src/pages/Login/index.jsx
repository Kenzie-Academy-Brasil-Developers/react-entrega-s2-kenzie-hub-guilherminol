import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, Title } from "./style.js";
import { Link } from "react-router-dom";

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório"),
    senha: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    console.log(data);
  };
  return (
    <>
      <Title> Bem vindo a Kenzie! Faça seu Login</Title>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>
          <p>
            Email: <span>{errors.email?.message}</span>:
          </p>
          <TextField size="small" label="Email" {...register("email")} />
        </label>

        <label>
          <p>
            Senha: <span>{errors.senha?.message}</span>
          </p>
          <TextField size="small" label="Senha" {...register("senha")} />
        </label>

        <Link to="/Login">Não é inscrito? faça sua inscrição</Link>

        <Button variant="outlined" type="submit">
          Cadastrar
        </Button>
      </Form>
    </>
  );
};
export default Login;
