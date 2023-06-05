import { useState } from 'react';

import { AppContainer, InputContainer, BodyContainer }  from './components/visualComponents/AppContainer';
import Heading from './components/visualComponents/Heading';
import PasswordGenerator from './components/functionalComponents/PasswordGenerator';
import TextField from './components/functionalComponents/TextField';
import PasswordStrength from './components/functionalComponents/PasswordStrength';
// import Button from './components/visualComponents/Button';


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
          <PasswordGenerator onPasswordChange={setPassword} />
          <PasswordStrength password={password} />

        </BodyContainer>
      </AppContainer>
    </>
  )
}

export default App
