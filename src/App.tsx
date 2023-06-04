import { useState } from 'react';


import Heading from './components/visualComponents/Heading';
import Container from './components/visualComponents/Container';
import PasswordGenerator from './components/functionalComponents/PasswordGenerator';
import TextField from './components/visualComponents/TextField';
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
      <Container>
        <TextField type='value' value={password} onChange={handlePasswordChange} />
        <PasswordStrength password={password} />
        <PasswordGenerator onPasswordChange={setPassword} />
  
      </Container>
    </>
  )
}

export default App
