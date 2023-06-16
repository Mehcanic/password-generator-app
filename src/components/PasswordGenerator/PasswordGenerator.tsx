import React, { useState } from 'react';
import Button from '../visualComponents/Button';
import { CheckBox, CheckBoxLabel, CheckBoxParagraph } from '../visualComponents/CheckBox';
import { Slider, SliderLabel, SliderParagraph } from '../visualComponents/Slider';
import { PasswordGeneratorContainer } from './PasswordGenerator.styles';

import PasswordStrength from '../PasswordStrength/PasswordStrength'

interface PasswordGeneratorProps {
  onPasswordChange: (password: string) => void;
  password: string;
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ onPasswordChange, password }) => {
  const [length, setLength] = useState(0);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);

  const generatePassword = () => {
    let characters = '';
    if (hasUpperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (hasLowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (hasNumbers) characters += '0123456789';
    if (hasSymbols) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    onPasswordChange(result);
  }

  return (
    <PasswordGeneratorContainer>
      <SliderLabel>
        <SliderParagraph>Character Length <span>{length}</span></SliderParagraph>
        <Slider
          type="range"
          min={0}
          max={18}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </SliderLabel>
      <CheckBoxLabel>
        <CheckBox
          type="checkbox"
          checked={hasUpperCase}
          onChange={(e) => setHasUpperCase(e.target.checked)}
        />
        <CheckBoxParagraph>Include Uppercase Letters</CheckBoxParagraph>
      </CheckBoxLabel>
      <CheckBoxLabel>
        <CheckBox
          type="checkbox"
          checked={hasLowerCase}
          onChange={(e) => setHasLowerCase(e.target.checked)}
        />
        <CheckBoxParagraph>Include Lowercase Letters</CheckBoxParagraph>
      </CheckBoxLabel>
      <CheckBoxLabel>
        <CheckBox
          type="checkbox"
          checked={hasNumbers}
          onChange={(e) => setHasNumbers(e.target.checked)}
        />
        <CheckBoxParagraph>Include Numbers</CheckBoxParagraph>
      </CheckBoxLabel>
      <CheckBoxLabel>
        <CheckBox
          type="checkbox"
          checked={hasSymbols}
          onChange={(e) => setHasSymbols(e.target.checked)}
        />
        <CheckBoxParagraph>Include Symbols</CheckBoxParagraph>
      </CheckBoxLabel>

      <PasswordStrength password={password} />
      <Button onClick={() => generatePassword()}>Generate</Button>
    </PasswordGeneratorContainer>
  );
};

export default PasswordGenerator;
