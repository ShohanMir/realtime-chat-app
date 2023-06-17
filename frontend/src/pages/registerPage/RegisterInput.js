import React from 'react';
import InputWithLabels from './../../shared/components/InputWithLabels';

const RegisterInput = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;
  return (
    <>
      <InputWithLabels
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter email address"
      />

      <InputWithLabels
        value={username}
        setValue={setUsername}
        label="Enter a Username"
        type="text"
        placeholder="Enter Username"
      />

      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="Password"
        type="text"
        placeholder="Enter your password"
      />
    </>
  );
};

export default RegisterInput;
