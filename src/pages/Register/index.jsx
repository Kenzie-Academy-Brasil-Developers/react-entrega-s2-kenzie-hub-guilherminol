import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, Title } from "./style.js";
import { Link, Redirect } from "react-router-dom";
import api from "../../services/api.js";
import { useHistory } from "react-router";

const Register = ({ isLogged }) => {
  const formSchema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório"),
    senha: yup.string().required("Campo Obrigatório"),
    confirmacaoSenha: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("senha")], "Senhas são diferentes"),
    bio: yup.string().required("Campo Obrigatório"),
    contato: yup.string().required("Campo Obrigatório"),
    modulo: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const HandleUser = ({ nome, email, senha, bio, contato, modulo }) => {
    return {
      email: email,
      password: senha,
      name: nome,
      bio: bio,
      contact: contato,
      course_module: modulo,
    };
  };
  const history = useHistory();
  const onSubmitFunction = (data) => {
    const user = HandleUser(data);
    api
      .post("/users", user)
      .then((response) => history.push("/Login"))
      .catch((err) => {
        alert(err);
      });
  };
  if (isLogged) {
    return <Redirect to="/Dashboard"></Redirect>;
  }
  return (
    <>
      <Title> Bem vindo a Kenzie, Cadastre-se!</Title>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <label>
            <p>
              Nome: <span>{errors.nome?.message}</span>
            </p>
            <TextField size="small" label="Nome" {...register("nome")} />
          </label>
          <label>
            <p>
              Email: <span>{errors.email?.message}</span>:
            </p>
            <TextField size="small" label="Email" {...register("email")} />
          </label>
        </div>

        <div>
          <label>
            <p>
              Senha: <span>{errors.senha?.message}</span>
            </p>
            <TextField size="small" label="Senha" {...register("senha")} />
          </label>
          <label>
            <p>
              Confirme a senha: <span>{errors.confirmacaoSenha?.message}</span>
            </p>
            <TextField
              size="small"
              label="Confirme a senha"
              {...register("confirmacaoSenha")}
            />
          </label>
        </div>

        <div>
          <label>
            <p>
              Módulo: <span>{errors.modulo?.message}</span>
            </p>
            <TextField
              size="small"
              label="Informe seu módulo"
              {...register("modulo")}
            />
          </label>
          <label>
            <p>
              Contato: <span>{errors.contato?.message}</span>
            </p>
            <TextField
              size="small"
              label="Passe seu contato"
              {...register("contato")}
            />
          </label>
        </div>
        <label>
          <p>
            Bio: <span>{errors.bio?.message}</span>
          </p>
          <TextField
            size="small"
            label="Fale sobre você"
            {...register("bio")}
            multiline
          />
        </label>
        <Link to="/Login">Já é inscrito? faça Login</Link>

        <Button variant="outlined" type="submit">
          Cadastrar
        </Button>
      </Form>
    </>
  );
};
export default Register;
