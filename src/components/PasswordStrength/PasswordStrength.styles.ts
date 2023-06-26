import styled from "styled-components"


export interface StrengthBarProps {
  backgroundColor?: string;
  borderColor?: string;
  opacity?: number;
  isFilled?: boolean;
}

export const StrengthContainer = styled.div<StrengthBarProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  width: 100%;
  max-width: 476px;
  height: 72px;
  margin: 32px 0;
  padding: 25px 32px;
  background-color: #18171F;
  opacity: ${props => props.isFilled ? props.opacity : 0.72};

  p {
    color: #817d92;
  }

  @media (max-width: 460px) {
    font-size: 16px;
    padding: 16px 18px;
    p {
      font-size: 18px;
    }
  }
`

export const StrengthBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;

  p {
    color: #e6e5ea;
    white-space: nowrap;
  }
`

export const StrengthBarFill = styled.div<StrengthBarProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 32px;

  @media (max-width: 460px) {
    font-size: 16px;
    
  }

  div {
    background-color: #18171F; 
    border: 2px solid #E6E5EA; 
    width: 10px;
    height: 28px;
    margin-left: 8px;

    &.filled {
      background-color: ${props => props.backgroundColor};
      border: 2px solid ${props => props.borderColor};
    }
  }
`

