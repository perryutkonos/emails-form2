// @flow
import React from 'react';
import Main from './components/Main';

type AppProps = {
  title: string,
  defaultEmails: Array<string>
}

type Props = {
  emails: Array<string>
}

const App = ({ title, defaultEmails }: AppProps) => {
  let resultEmails = defaultEmails;
  let callBack: Function = () => {};

  const updateAppEmails = (emails) => {
    resultEmails = [...emails];
    callBack(resultEmails);
  };

  return {
    EmailsEditorComponent: ({ emails = defaultEmails }: Props) => (
      <Main updateAppEmails={updateAppEmails} title={title} emails={emails} />
    ),
    getEmails: () => resultEmails,
    setCallBack: (newCallBack: Function) => { callBack = newCallBack; },
    updateAppEmails,
  };
};

export default App;
