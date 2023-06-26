import styled from 'styled-components';

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

  @media (max-width: 460px) {
    font-size: 24px;
    padding: 0 16px;
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
  cursor: pointer;
  fill: ${({ copied }) => (copied ? '#a4ffaf' : '#E6E5EA')};
`;

const CopiedText = styled.span<{ copied: boolean }>`
  font-size: 18px;
  color: ${({ copied }) => (copied ? '#a4ffaf' : 'transparent')};
  margin-right: 16px;
`;

export { TextFieldContainer, Input, CopyContainer, CopyIcon, CopiedText };