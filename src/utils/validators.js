const isHtmlElement = (element) => {
  try {
    return element instanceof HTMLElement;
  } catch (e) {
    return (typeof element === 'object')
      && (element.nodeType === 1) && (typeof element.style === 'object')
      && (typeof element.ownerDocument === 'object');
  }
};

const validateEmail = (email) => {
  const res = email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/); // eslint-disable-line
  return res !== null && true;
};

const validateContainer = (container) => {
  if (!container) {
    console.error('Emails Editor: Invalid Enter Data, container not found');
    return false;
  }
  if (!isHtmlElement(container)) {
    console.error('Emails Editor: Invalid Enter Data, container is not HtmlElement');
    return false;
  }

  return true;
};

const validateEmailsArray = (emails) => {
  if (((typeof emails) !== 'object' || !Array.isArray(emails))) {
    console.error('Emails Editor: Invalid Enter Data, defaultEmails must be array');
    return false;
  }
  return true;
};

const validateTitle = (title) => {
  if ((typeof title) !== 'string') {
    console.error('Emails Editor: Invalid Enter Data, title must be string');
    return false;
  }
  return true;
};

const validateEnterData = ({ container, title, defaultEmails }) => {
  const result = validateContainer(container)
    && validateEmailsArray(defaultEmails)
    && validateTitle(title);
  return result;
};

export {
  validateEmail as default, validateEmail, validateEmailsArray, validateEnterData,
};
