import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #212121;
  align-items: center;
  justify-content: center;
  a,
  h1 {
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    transition: 0.5s;
  }
  span {
    transition: 0.5s;
    color: #0e76a8;
  }
  a:hover {
    transition: 0.5s;
    color: #0e76a8;
    span {
      transition: 0.5s;
      color: #fff;
    }
  }
`;
