import styled from "styled-components";

export interface StrengthBarProps {
  backgroundColor?: string;
  borderColor?: string;
  opacity?: number;
}

export const StrengthBar = styled.div<StrengthBarProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 32px;

  div {
    background-color: #18171F; 
    border: 2px solid #E6E5EA; 
    width: 10px;
    height: 28px;
    margin-left: 8px;

    &.filled {
      background-color: ${props => props.backgroundColor};
      border: 2px solid ${props => props.borderColor};
      opacity: ${props => props.opacity};
    }
  }
`