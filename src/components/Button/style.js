import styled from "styled-components";
export const Button = styled.button`
  background-color: #e95959;
  text-transform: uppercase;
  padding: 5px 15px;
  font-size: ${(props) => props.fontSize}px;
  color: #fff;
  /* text-shadow: 1px 1px 1px #000; */
  border: 0;
  border-radius: 15px;
  :hover {
    transition: 0.3s;
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
