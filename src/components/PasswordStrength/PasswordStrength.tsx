import React, { useEffect, useState } from 'react';

import { StrengthBar, StrengthContainer, StrengthBarFill } from './PasswordStrength.styles';

interface PasswordStrengthProps {
  password: string;
  isFilled: boolean;
}

const getColorFromStrength = (strength: string) => {
  switch (strength) {
    case 'TOO WEAK!':
      return { color: '#F64A4A', level: 1, opacity: 0.72 };
    case 'WEAK':
      return { color: '#FB7C58', level: 2, opacity: 1 };
    case 'MEDIUM':
      return { color: '#F8CD65', level: 3, opacity: 1 };
    case 'STRONG':
      return { color: '#A4FFAF', level: 4, opacity: 1 };
    default:
      return { color: '#18171F', level: 0, opacity: 1 };
  }
};

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password, isFilled }) => {
  const [strength, setStrength] = useState('');
  const { color, level, opacity } = getColorFromStrength(strength);
  const bars = new Array(4).fill(false).fill(true, 0, level);

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
    <StrengthContainer opacity={opacity} isFilled={isFilled} >
      <p>STRENGTH</p>
      <StrengthBar>
      {strength !== '' && <p>{strength}</p>} 
        {/* <StrengthBarFill strength={strength} /> */}
        <StrengthBarFill backgroundColor={color} borderColor={color} >
          {bars.map((isFilled, index) => (
            <div
              key={index}
              className={`strength-bar-fill ${isFilled ? 'filled' : ''}`}
            />
          ))}
        </StrengthBarFill>
      </StrengthBar> 
      
    </StrengthContainer>
  );
};

export default PasswordStrength;
