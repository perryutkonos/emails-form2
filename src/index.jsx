import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import App from './App';

import { validateEnterData, validateEmailsArray } from './utils/validators';

import './styles/index.pcss';


const MOUNT_NODE = document.getElementById('root');

const renderComponent = ({ container, options = {} }) => {
  const { title = 'Your board', defaultEmails = [] } = options;

  if (!validateEnterData({ container, title, defaultEmails })) {
    return false;
  }
  const {
    EmailsEditorComponent, getEmails, setCallBack, updateAppEmails,
  } = App({ title, defaultEmails });

  render(<EmailsEditorComponent />, container);

  const setEmails = (emails) => {
    if (!validateEmailsArray(emails)) {
      return false;
    }

    unmountComponentAtNode(container);
    render(<EmailsEditorComponent emails={emails} />, container);
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
  module.hot.accept(['./App.jsx'], () => {
    unmountComponentAtNode(MOUNT_NODE);
    renderComponent();
  });
}

const EmailsEditor = ({ container, options }) => renderComponent({ container, options });

export default EmailsEditor;
