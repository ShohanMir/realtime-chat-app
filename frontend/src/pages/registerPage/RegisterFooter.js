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

const RegisterFooter = ({ handleRegister, isFormValid }) => {
  const history = useNavigate();
  const handlePushToLogin = () => {
    history('/login');
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
            onClick={handleRegister}
          />
        </div>
      </Tooltip>

      <RedirectInfo
        text=""
        redirectText="Already have an account"
        additionalStyle={{ marginTop: '5px' }}
        redirectHandler={handlePushToLogin}
      />
    </>
  );
};

export default RegisterFooter;
