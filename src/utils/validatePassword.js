export const validatePassword = (Password) => {
  return /^(?=.*?[a-z])(?=.*\d).{8,}$/i.test(Password) ? true : false;
};
