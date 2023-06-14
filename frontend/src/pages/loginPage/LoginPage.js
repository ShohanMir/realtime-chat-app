import React, { useEffect, useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginHeader from './LoginHeader';
import LoginInput from './LoginInput';
import LoginFooter from './LoginFooter';
import { validateLoginForm } from '../../shared/utils/validators';

const LoginPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    console.log(mail, password);
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
