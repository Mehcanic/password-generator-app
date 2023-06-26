import { useState } from 'react';
import { CopyContainer, CopiedText, CopyIcon, Input, TextFieldContainer } from './TextField.styles';

interface TextFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ type, value, onChange }: TextFieldProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  const handleCopyIconClick = () => {
    handleCopy();
  };

  return (
    <TextFieldContainer>
      <Input
        name='password'
        type={type}
        value={value}
        onChange={onChange}
        placeholder='P4$5W0rD!*'
      />
      <CopyContainer>
        <CopiedText copied={isCopied}>COPIED</CopiedText>
        <CopyIcon
          src="./icon-copy.svg"
          alt="Copy"
          onClick={handleCopyIconClick}
          copied={isCopied}
        />
      </CopyContainer>
    </TextFieldContainer>
  );
}

export default TextField;