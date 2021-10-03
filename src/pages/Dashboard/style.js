import styled from "styled-components";
export const Container = styled.div`
  background-color: #212121;
  padding-bottom: 50px;
  min-height: 100vh;
  h1 {
    color: #fff;
    margin: 0;
    text-align: center;
    padding: 50px;
  }
  h2 {
    text-align: center;
  }
  Button {
    width: fit-content;
  }
`;
export const Tecnologias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: lightgrey;
  width: 80%;
  height: fit-content;
  margin: 0 auto 30px auto;
  border-radius: 30px;
`;
export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
