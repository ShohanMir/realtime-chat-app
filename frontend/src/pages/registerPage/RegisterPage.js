import React, { useState } from 'react';
import { Typography } from '@mui/material';
import AuthBox from '../../shared/components/AuthBox';
import RegisterInput from './RegisterInput';

const RegisterPage = () => {
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <AuthBox>
      <Typography varient="5" szx={{ color: '#FFFF' }}>
        Create an account
      </Typography>
      <RegisterInput
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </AuthBox>
  );
};

export default RegisterPage;
