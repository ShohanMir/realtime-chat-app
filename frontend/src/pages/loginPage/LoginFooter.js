import React from 'react';
import PrimaryButton from '../../shared/components/PrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const getFormNotValidMessage = () => {
  return 'Enter email address and password that contain 8 charectets long';
};

const getFormValidMessage = () => {
  return 'Press to login';
};

const LoginFooter = ({ handleLogin, isFormValid }) => {
  const history = useNavigate();
  const handlePushToRegister = () => {
    history('/register');
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <PrimaryButton
            label="Login"
            additionalStyles={{ marginTop: '30px' }}
            disable={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>

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
