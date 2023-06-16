import React, { useEffect, useState } from 'react';
import { StrengthBar, StrengthContainer } from './PasswordStrength.styles';
import StrengthBarFill from '../StrengthBarFill/StrengthBarFill'


interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const [strength, setStrength] = useState('');

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  function checkPasswordStrength(password: string) {
    let strength = 0;
    if (password.length >= 12) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;


    switch (strength) {
      case 0:
        setStrength('');
        break;
      case 1:
        setStrength('TOO WEAK!');
        break;
      case 2:
        setStrength('WEAK');
        break;
      case 3:
        setStrength('MEDIUM');
        break;
      default:
        setStrength('STRONG');
        break;
    }
  }

  return (
    <StrengthContainer>
      <p>STRENGTH</p>
      <StrengthBar>
      {strength !== '' && <p>{strength}</p>} 
        <StrengthBarFill strength={strength} />
      </StrengthBar> 
    </StrengthContainer>
  );
};

export default PasswordStrength;
