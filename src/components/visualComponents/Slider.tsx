import styled from "styled-components";

interface SliderProps {
  value: number;
  min: number;
  max: number;
}
// TODO fix hoover on mobile so the background comesback to proper white color
export const SliderLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 313px;
  max-width: 476px;
  margin-top: 23px;
  margin-bottom: 32px;
  
  `;

export const SliderParagraph = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  padding: 10px 0;
  color: #E6E5EA;

    span {
      font-size: 32px;
      font-weight: bold;
      color: #a4ffaf;
    }

    @media (max-width: 460px) {
    font-size: 16px;
    margin-bottom: 8px;

    span {
      font-size: 24px;
    }
    
  }
  `;

export const Slider = styled.input.attrs<SliderProps>({ type: 'range' })<SliderProps>`
  -webkit-appearance: none;
  appearance: none;
  width: 476px;
  height: 10px;
  border-radius: 5px;
  background: #18171F;
  outline: none;

  @media (max-width: 460px) {
    width: 311px;
    
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;  
    height: 28px;
    margin-top: -10px;
    border-radius: 50%;
    background: #E6E5EA;
    cursor: pointer;

    &:hover {
      width: 30px;
      height: 30px;
      margin-top: -11px;
      background: #18171F;
      border: 2px solid #a4ffaf;
    }
  }

  &::-moz-range-thumb {
    width: 28px;  
    height: 28px;
    margin-top: -10px;
    border-radius: 50%;
    background: #E6E5EA;
    cursor: pointer;

    &:hover {
      background: #18171F;
      border: 2px solid #a4ffaf;
    }
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      #a4ffaf 0%,
      #a4ffaf ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%,
      #18171F ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%,
      #18171F 100%
    );
  }

  &::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      #a4ffaf 0%,
      #a4ffaf ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%,
      #18171F ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%,
      #18171F 100%
    );
  }
  `;

  