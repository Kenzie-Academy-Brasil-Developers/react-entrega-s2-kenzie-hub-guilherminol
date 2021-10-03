import styled from "styled-components";
export const Headerstyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 80%;
  color: #fff;
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    width: 200px;
    justify-content: space-between;
    text-transform: uppercase;
    padding: 0;
    background-color: transparent;
  }

  li {
    min-width: 85px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    font-style: italic;
  }
`;
