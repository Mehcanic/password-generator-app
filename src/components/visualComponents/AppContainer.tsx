import styled from "styled-components";

export const AppContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 540px;
  margin-inline: auto;

  @media (max-width: 460px) {
    width: 343px;
    
  }

`;

export const InputContainer = styled.div`
  background-color: #24232C;

  width: 100%;
  margin-inline: auto;
  margin-bottom: 24px; 
  
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background-color: #24232C;

  width: 100%;
  margin-inline: auto;
  padding: 0 20px;
  
`;