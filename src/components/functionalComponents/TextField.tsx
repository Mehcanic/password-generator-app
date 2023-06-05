import { useState } from 'react';
import styled from "styled-components";

interface TextFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  background-color: #24232C;
  color: #E6E5EA;
  font-family: 'JetBrains Mono', monospace;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;

  outline: none;
  border: none;
  width: 80%;
  height: 80px;
  margin-inline: auto;
  padding: 0 32px;

  ::placeholder {
    color: #E6E5EA;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
`;

const CopyIcon = styled.img<{ copied: boolean }>`
  width: 21px;
  height: 24px;
  /* margin-left: 10px; */
  cursor: pointer;
  fill: ${({ copied }) => (copied ? '#a4ffaf' : '#E6E5EA')};
`;

const CopiedText = styled.span<{ copied: boolean }>`
  font-size: 18px;
  color: ${({ copied }) => (copied ? '#a4ffaf' : 'transparent')};
  margin-right: 16px;
`;



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