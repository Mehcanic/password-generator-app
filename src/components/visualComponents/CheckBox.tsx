// CheckBox.tsx
import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0 16px;
`

export const CheckBoxLabel = styled.label`
  display: flex;
  justify-content: start;
  align-items: top;
  width: 100%;
  margin: 0 auto 20px auto;
  padding-left: 16px; 
  cursor: pointer;

  :last-child {
    margin-bottom: 0;
  }

  @media (max-width: 460px) {
    padding-left: 0;
  }
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  /* Custom checkbox style */
  position: relative;
  width: 18px;
  height: 18px;

  /* Hide the checkbox visually */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #E6E5EA;
    background-color: #18171F;
    transition: background-color 0.2s ease-in-out;
  }

  &::after {
    content: url('./icon-check.svg');
    position: absolute;
    top: 5px;
    left: 4px;
    width: 20px;
    height: 20px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }


  &:checked::before {
    background-color: #a4ffaf;
    border-color: #a4ffaf;
  }

  &:checked::after {
    opacity: 1;
  }

  &:hover::before {
    border-color: #a4ffaf;
  }

  &:checked:hover::before {
    background-color: #a4ffaf;
    border-color: #a4ffaf;
  }

  &:indeterminate::before {
    background-color: #a4ffaf;
  }

  @media (max-width: 460px) {
    font-size: 16px;
    
  }
`;

export const CheckBoxParagraph = styled.p`
  color: #E6E5EA;
  height: 24px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-left: 24px;

  @media (max-width: 460px) {
    font-size: 16px;
    margin-left: 20px;
  }
`;
