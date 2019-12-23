// @flow
import React from 'react';
import Main from './components/Main';

import type { Emails } from './types/emails';

type AppProps = {
  title: string,
  defaultEmails: Emails
}

type Props = {
  emails: Array<string>
}

const App = ({ title, defaultEmails }: AppProps) => {
  let resultEmails = defaultEmails;
  let callBack: Function = () => {};

  const updateAppEmails = (emails: Emails) => {
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
