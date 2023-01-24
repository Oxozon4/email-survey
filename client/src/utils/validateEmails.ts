/* eslint-disable no-useless-escape */
const re =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmails = (emails: string): string | undefined => {
  const invalidEmails = emails
    .split(',')
    .map((email) => email.trim())
    .filter((email) => !re.test(email));

  return invalidEmails.length
    ? `These emails are invalid: ${invalidEmails}`
    : undefined;
};

export default validateEmails;
