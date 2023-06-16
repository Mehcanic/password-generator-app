import styled from "styled-components";

const Button = styled.button`
  background-color: #a4ffaf;
  color: #24232C;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border: none;
  margin: 0 auto 32px auto;
  padding: 10px 20px;
  width: 476px;
  height: 65px;
  cursor: pointer;

  @media (max-width: 460px) {
    width: 311px;
    
  }
`;

export default Button;