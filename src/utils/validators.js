const validateEmail = (email) => {
  const res = email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/); // eslint-disable-line
  return res !== null && true;
};

export { validateEmail as default, validateEmail };
