import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  justify-content: space-around;
  margin: 0 auto;
  text-align: center;
  Button {
    height: 50%;
    margin: 30px auto 0 auto;
  }
  div {
    display: flex;
    justify-content: space-around;
  }
  p {
    font-size: 12px;
    margin-bottom: 5px;
  }
  a {
    margin-top: 10px;
    color: #007aff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  span {
    color: red;
  }
  TextField {
    width: 230px;
  }
`;
export const Title = styled.h1`
  color: #212121;
  text-align: center;
  span {
    color: #007aff;
  }
`;
export const Container = styled.div`
  display: flex;
  background-color: #212121;
  img {
    width: 60%;
    height: 100vh;
    filter: grayscale(1);
  }
  img + div {
    background-color: #fff;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
