const validateEmail = (email) => {
  const res = email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/); // eslint-disable-line
  return res !== null && true;
};

export const validateEnterData = ({ container, title, defaultEmails }) => {
  if (!container) {
    console.error('Emails Editor: Invalid Enter Data, container is required');
    return false;
  }

  if (((typeof defaultEmails) !== 'object' || !Array.isArray(defaultEmails))) {
    console.error('Emails Editor: Invalid Enter Data, defaultEmails must be array');
    return false;
  }
  if ((typeof title) !== 'string') {
    console.error('Emails Editor: Invalid Enter Data, title must be string');
    return false;
  }

  return true;
};

export { validateEmail as default, validateEmail };
