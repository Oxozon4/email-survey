/* eslint-disable no-useless-escape */
const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
