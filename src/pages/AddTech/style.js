import styled from "styled-components";
export const Container = styled.div`
  background-color: #212121;
  padding-bottom: 50px;
  min-height: 100vh;
  h1 {
    color: #fff;
    margin: 0;
    text-align: center;
    padding: 20px;
  }
  h2 {
    text-align: center;
  }
  Button {
    width: fit-content;
  }
`;
export const FormContainer = styled.form`
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: lightgrey;
  width: 50%;
  height: 300px;
  margin: 0 auto 30px auto;
  border-radius: 30px;
`;
