import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

import './styles/index.pcss';

import App from './components/App';

const MOUNT_NODE = document.getElementById('root');

const renderComponent = ({ container, options }) => {
  const { component, getEmails, setCallBack } = App(options);
  const Component = component;

  render(<Component />, container);

  const setEmails = (emails) => {
    unmountComponentAtNode(container);
    render(<Component emails={emails} />, container);
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
