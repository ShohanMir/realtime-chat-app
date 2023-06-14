import React, { useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from '../../shared/components/authPage/LoginPageHeader';
import LoginPageInput from '../../shared/components/authPage/LoginPageInput';

const LoginPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
    </AuthBox>
  );
};

export default LoginPage;
