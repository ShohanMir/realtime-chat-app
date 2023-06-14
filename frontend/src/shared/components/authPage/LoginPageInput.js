import React from 'react';
import InputWithLabels from '../InputWithLabels';

const LoginPageInput = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Eneter e-mail address"
      />

      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Eneter password"
      />
    </>
  );
};

export default LoginPageInput;
