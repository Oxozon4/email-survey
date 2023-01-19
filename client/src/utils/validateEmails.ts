const validateEmail = (emails: string): string[] => {
  const emailsArray = emails.split(',').map((email) => email.trim());

  return emailsArray;
};

export default validateEmail;
