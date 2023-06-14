import React from 'react';
import PrimaryButton from '../../shared/components/PrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';

import { useNavigate } from 'react-router-dom';

const LoginFooter = ({ hadnleLogin, isFormValid }) => {
  const history = useNavigate();
  const handlePushToRegister = () => {
    history('/register');
  };
  return (
    <>
      <div>
        <PrimaryButton
          label="Login"
          additionalStyles={{ marginTop: '30px' }}
          disable={!isFormValid}
          onClick="handleLogin"
        />
      </div>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyle={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegister}
      />
    </>
  );
};

export default LoginFooter;
