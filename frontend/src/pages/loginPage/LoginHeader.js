import React from 'react';
import { Typography } from '@mui/material';

const LoginHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: '#FFFF' }}>
        Welcome back!
      </Typography>
      <Typography sx={{ color: '#b9bbbe' }}>
        We are happy that you are with us!
      </Typography>
    </>
  );
};

export default LoginHeader;
