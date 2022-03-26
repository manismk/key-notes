import { validateMail } from "./validateEmail";

export const handleLoginValidation = (mailData, passwordData) => {
  let mailError = "";
  let passwordError = "";
  if (mailData.length === 0) mailError = "Email can't be Empty";
  if (mailData.length && !validateMail(mailData))
    mailError = "Invalid email format";
  if (passwordData.length === 0) passwordError = "Password can't be Empty";
  return { mailError, passwordError };
};
