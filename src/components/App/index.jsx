// @flow
import React from 'react';
import Header from '../Header';
import Input from '../Input';
import Controls from '../Controls';

import './style.pcss';

type Props = {
  title: string
}

const App = ({ title }: Props) => (
  <div className="emails-container">
    <div className="emails-container__top">
      <Header title={title} />
      <Input />
    </div>
    <Controls />
  </div>
);

export default App;
