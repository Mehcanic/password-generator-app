import { useState } from 'react';

import { AppContainer, InputContainer, BodyContainer } from './components/visualComponents/AppContainer';
import Heading from './components/visualComponents/Heading';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import TextField from './components/TextField/TextField';


function App() {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }


  return (
    <>
      <Heading>Password Generator</Heading>
      <AppContainer>
        <InputContainer>
          <TextField type='value' value={password} onChange={handlePasswordChange} />
        </InputContainer>
        <BodyContainer>
          <PasswordGenerator onPasswordChange={setPassword} password={password} />
        </BodyContainer>
      </AppContainer>
    </>
  )
}

export default App
