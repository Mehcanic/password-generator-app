
import styled from "styled-components";

interface TextFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password?: string;
}

const Input = styled.input`
  width: 80%;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #333;
  }
`;

function TextField({ type, value, onChange, password }: TextFieldProps) {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={password}
    />
  );
}

export default TextField;
