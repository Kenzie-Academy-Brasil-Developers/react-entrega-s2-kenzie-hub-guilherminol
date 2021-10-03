import styled from "styled-components";
export const Container = styled.div`
  background-color: #212121;
  margin: 20px;
  padding: 15px;
  border-radius: 5px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 150px;
    border-radius: 50%;
  }
  h3 {
    text-transform: capitalize;
    color: #fff;
    text-align: center;
  }
  button {
    background-color: #fa6463;
    color: #fff;
    margin: 10px auto 0 auto;
    border: 1px solid #fff;
    border-radius: 3px;
  }
  button:hover {
    transition: 0.3s;
    background-color: #212121;
    cursor: pointer;
  }
`;
