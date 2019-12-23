import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import App from './components/App';

import { validateEnterData } from './utils/validators';

import './styles/index.pcss';


const MOUNT_NODE = document.getElementById('root');

const renderComponent = ({ container, options = {} }) => {
  const { title = 'Your board', defaultEmails = [] } = options;

  if (!validateEnterData({ container, title, defaultEmails })) {
    return false;
  }
  const { EmailsEditorComponent, getEmails, setCallBack } = App({ title, defaultEmails });

  render(<EmailsEditorComponent />, container);

  const setEmails = (emails) => {
    unmountComponentAtNode(container);
    render(<EmailsEditorComponent emails={emails} />, container);
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
  module.hot.accept(['./components/App/index.jsx'], () => {
    unmountComponentAtNode(MOUNT_NODE);
    renderComponent();
  });
}

const EmailsEditor = ({ container, options }) => renderComponent({ container, options });

export default EmailsEditor;
