import styled from "styled-components"

import type { StrengthBarProps } from "../StrengthBarFill/StrengthBarFill.styles";

// TODO fix not working opacity for StrengthContainer
// TODO make mobile styles work for phones
export const StrengthContainer = styled.div<StrengthBarProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  width: 476px;
  height: 72px;
  margin: 32px 0;
  padding: 32px;
  background-color: #18171F;
  &.filled {
      opacity: ${props => props.opacity};
    }

  p {
    color: #817d92;
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
    margin-right: 8px;
  }

`


