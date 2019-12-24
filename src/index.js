import App from './App';
import { validateEnterData, validateEmailsArray } from './utils/validators';
import createHash from './utils/createHash';

import './styles/index.pcss';

const renderComponent = ({ container, options = {} }) => {
  const { title = 'Your board', defaultEmails = [] } = options;

  if (!validateEnterData({ container, title, defaultEmails })) {
    return false;
  }

  const postfix = createHash(container.outerHTML);

  const {
    form, getEmails, setCallBack, updateAppEmails,
  } = App({ title, emails: defaultEmails, postfix });

  while (container.childElementCount) {
    container.removeChild(container.firstChild);
  }

  container.append(form);

  const setEmails = (emails) => {
    if (!validateEmailsArray(emails)) {
      return false;
    }
    updateAppEmails(emails);
    return true;
  };

  const onChange = (callback) => {
    setCallBack(callback);
  };

  return {
    getEmails,
    setEmails,
    onChange,
  };
};

if (module.hot) {
  module.hot.accept(['./App/index.js'], () => {
    renderComponent();
  });
}

const EmailsEditor = ({ container, options }) => renderComponent({ container, options });

export default EmailsEditor;
