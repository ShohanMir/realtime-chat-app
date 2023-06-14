import React, { useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginHeader from './LoginHeader';
import LoginInput from './LoginInput';
import LoginFooter from './LoginFooter';

const LoginPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {
    console.log('handleLogin');
  };
  return (
    <AuthBox>
      <LoginHeader />
      <LoginInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
