import React from 'react';
import PrimaryButton from '../../shared/components/PrimaryButton';

const LoginFooter = ({ hadnleLogin, isFormValid }) => {
  return (
    <div>
      <PrimaryButton
        label="Login"
        additionalStyles={{ marginTop: '30px' }}
        disable={!isFormValid}
        onClick="handleLogin"
      />
    </div>
  );
};

export default LoginFooter;
