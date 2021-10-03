import { Container, FormContainer } from "./style";
import { Redirect, useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Button } from "../../components/Button/style.js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api.js";
import axios from "axios";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const AddTech = () => {
  const userToken = JSON.parse(window.localStorage.getItem("token"));
  const userId = JSON.parse(window.localStorage.getItem("user")).id;
  const history = useHistory();
  const [statusTech, setStatusTech] = useState("Iniciante");

  const handleChange = (event) => {
    console.log(event.target.value);
    setStatusTech(event.target.value);
  };
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    status: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    axios({
      method: "post",
      url: "https://kenziehub.herokuapp.com/users/techs",
      data: data,
      headers: {
        Authorization: "Bearer " + userToken,
      },
    })
      .then((response) => {
        axios
          .get(`https://kenziehub.herokuapp.com/users/${userId}`)
          .then((response) => {
            window.localStorage.setItem("user", JSON.stringify(response.data));
          })
          .then((response) => {
            history.push("/Dashboard");
          });
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Container>
        <h1>Adicione novas tecnologias</h1>
        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
          <label>
            <InputLabel>Nome da sua tecnologia</InputLabel>
            <TextField
              size="small"
              label="Nome da sua tecnologia"
              {...register("title")}
            />
          </label>

          <label>
            <InputLabel id="demo-simple-select-label">
              Nível da sua tecnologia
            </InputLabel>
            <Select
              sx={{ minWidth: 235 }}
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={statusTech}
              label="Age"
              {...register("status")}
              onChange={handleChange}
            >
              <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
              <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
              <MenuItem value={"Avançado"}>Avançado</MenuItem>
            </Select>
          </label>
          <Button>Adicionar nova tecnologia</Button>
        </FormContainer>
      </Container>
    </>
  );
};
export default AddTech;
