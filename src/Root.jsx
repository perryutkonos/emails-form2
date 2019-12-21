import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

import './styles/index.pcss';

import App from './components/App';

const MOUNT_NODE = document.getElementById('root');

const renderComponent = ({ container, options }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  render(<App {...options} />, container);
};

if (module.hot) {
  module.hot.accept(['./components/App/index.jsx'], () => {
    unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

export default renderComponent;
