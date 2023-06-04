import styled from "styled-components";
import IconCheck from "../../svgs/IconCheck";

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
/* Hide the default checkbox */
appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  /* Custom checkbox style */
  position: relative;
  width: 20px;
  height: 20px;

  /* Hide the checkbox visually */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #E6E5EA;
    border-radius: 4px;
    background-color: #18171F;
    transition: background-color 0.2s ease-in-out;
  }

  /* SVG as checkbox */
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    
  }

  /* Checked state */
  &:checked::before {
    background-color: #a4ffaf;
  }
  /* Show the SVG when checked */
  &:checked::after {
    opacity: 1;
  }

  /* Hover state */
  &:hover::before {
    background-color: #36353F;
  }

  /* Checked and Hover state */
  &:checked:hover::before {
    background-color: #a4ffaf;
  }

  /* Indeterminate state */
  &:indeterminate::before {
    background-color: #a4ffaf;
  }
  `;


export const CheckBoxLabel = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
  `;

export const CheckBoxParagraph = styled.p`
  color: #E6E5EA;
  height: 24px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;

`;