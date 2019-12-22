// @flow
import React, { useState } from 'react';
import type { Emails } from '../../types/emails';

import Header from '../Header';
import Editor from '../Editor';
import Controls from '../Controls';

type Props = {
  emails: Emails,
  updateEmails: Emails => void,
  title: string,
};

const Main = ({ emails, title, updateEmails }: Props) => {
  const [emailList, updateList] = useState(emails);

  const addEmails = (newEmails) => {
    const newList = [...emailList, ...newEmails];
    updateList(newList);
    updateEmails(newList);
  };

  const removeEmail = (index) => {
    const newList = [...emailList];
    newList.splice(index, 1);
    updateList(newList);
    updateEmails(newList);
  };

  return (
    <div className="emails-container">
      <div className="emails-container__top">
        <Header title={title} />
        <Editor emails={emailList} addEmails={addEmails} removeEmail={removeEmail} />
      </div>
      <Controls emails={emailList} addEmails={addEmails} />
    </div>
  );
};

export default Main;
