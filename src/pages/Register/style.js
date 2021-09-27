import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: space-around;
  margin: auto;
  text-align: center;
  Button {
    width: 229px;
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
  span {
    color: red;
  }
  TextField {
    width: 230px;
  }
`;
export const Title = styled.h1`
  color: #007aff;
  text-align: center;
`;
