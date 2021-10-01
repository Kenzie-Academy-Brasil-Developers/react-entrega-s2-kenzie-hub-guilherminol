import styled from "styled-components";
import background from "../../images/background.png";
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 80%;

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
export const Container = styled.div`
  background-size: cover;
  min-height: 100vh;
  background-image: url(${background});
  color: #fff;
`;
export const Content = styled.main`
  width: 60%;
  margin: 80px auto;
  text-align: center;
  span {
    color: #007aff;
    text-shadow: 1px 0px 0.3px rgba(255, 255, 255);
  }
`;
