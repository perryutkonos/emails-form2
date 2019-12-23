// @flow
import React, { useState } from 'react';
import type { Emails } from '../../types/emails';

import Header from '../Header';
import Editor from '../Editor';
import Controls from '../Controls';

import useScroll from '../../hooks/useScroll';

import './style.pcss';

type Props = {
  emails: Emails,
  updateAppEmails: Emails => void,
  title: string,
};

const Main = ({ emails, title, updateAppEmails }: Props) => {
  const [emailList, updateList] = useState(emails);

  const [emailsEditor, scrollEditorBottom] = useScroll('bottom');

  const addEmails = (newEmails) => {
    const newList = [...emailList, ...newEmails];
    updateList(newList);
    scrollEditorBottom();
    updateAppEmails(newList);
  };

  const removeEmail = (index) => {
    const newList = [...emailList];
    newList.splice(index, 1);
    updateList(newList);
    updateAppEmails(newList);
  };

  return (
    <div className="emails-container">
      <div className="emails-container__top">
        <Header title={title} />
        <Editor
          emails={emailList}
          addEmails={addEmails}
          removeEmail={removeEmail}
          ref={emailsEditor}
        />
      </div>
      <Controls emails={emailList} addEmails={addEmails} />
    </div>
  );
};

export default Main;
