import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = ({ label, additionalStyles, disable, onClick }) => {
  return (
    <Button
      varient="contained"
      sx={{
        bgcolor: '#5865F2',
        color: '#FFFF',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        width: '100%',
        height: '40px',
      }}
      style={additionalStyles ? additionalStyles : {}}
      disable={disable}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
