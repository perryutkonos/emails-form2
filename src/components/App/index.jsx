// @flow
import React from 'react';
import Main from '../Main';
import './style.pcss';

type AppProps = {
  title: string,
  defaultEmails: Array<string>
}

type Props = {
  emails: Array<string>
}

const App = ({ title = 'Default Title', defaultEmails = [] }: AppProps) => {
  let resultEmails = defaultEmails;
  let callBack: Function = () => {};

  const updateEmails = (emails) => {
    resultEmails = [...emails];
    callBack(resultEmails);
  };

  return {
    component: ({ emails = defaultEmails }: Props) => (
      <Main updateEmails={updateEmails} title={title} emails={emails} />
    ),
    getEmails: () => resultEmails,
    setCallBack: (newCallBack: Function) => { callBack = newCallBack; },
  };
};

export default App;
