import { validateMail, validatePassword } from "./";

export const handleSignUpValidation = (
  firstNameData,
  lastNameData,
  mailData,
  passwordData,
  confirmPasswordData
) => {
  let mailError = "";
  let passwordError = "";
  let firstNameError = "";
  let lastNameError = "";
  let confirmPasswordError = "";

  if (firstNameData.length === 0) firstNameError = "First name can't be Empty";
  if (lastNameData.length === 0) lastNameError = "Last name can't be Empty";
  if (mailData.length === 0) mailError = "Email can't be Empty";
  if (mailData.length && !validateMail(mailData))
    mailError = "Invalid email format";
  if (passwordData.length === 0) passwordError = "Password can't be Empty";
  if (passwordData.length && !validatePassword(passwordData))
    passwordError =
      "Password should contain at least 8 characters, 1 letter and 1 number";
  if (confirmPasswordData.length === 0)
    confirmPasswordError = "Confirm Password can't be Empty";
  if (confirmPasswordData.length && passwordData !== confirmPasswordData)
    confirmPasswordError = "Password and Confirm Password should be same";
  return {
    firstNameError,
    lastNameError,
    mailError,
    passwordError,
    confirmPasswordError,
  };
};
