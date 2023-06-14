export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 12;
};

const validateMail = (mail) => {
  const emailPattern = '';
  return emailPattern.test(mail);
};
