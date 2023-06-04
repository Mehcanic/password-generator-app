import React, { useEffect, useState } from 'react';

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
    if (password.length > 12) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++; 
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[\u0020-\u007E\u00A0-\u00FF\u0100-\u017F]+/)) strength++;

    switch(strength) {
      case 0:
        setStrength('Very weak');
        break;
      case 1:
        setStrength('Weak');
        break;
      case 2:
        setStrength('Better');
        break;
      case 3:
        setStrength('Medium');
        break;
      case 4:
        setStrength('Strong');
        break;
      default:
        setStrength('Very strong');
        break;
    }
  }

  return (
    <div>
      <p>{strength}</p>
    </div>
  );
};

export default PasswordStrength;