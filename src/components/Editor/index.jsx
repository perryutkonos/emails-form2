// @flow
import React, { useRef } from 'react';
import uuid from 'uuid/v4';
import type { Emails } from '../../types/emails';

import EmailsList from '../../ui-components/EmailsList';
import Email from '../../ui-components/Email';
import Input from '../../ui-components/Input';

import './styles.pcss';

type Props = {
  emails: Emails,
  addEmails: Emails => void,
  removeEmail: number => void,
};

const ENTER_KEY_CODE = 'Enter';
const COMMA_KEY_CODE = ',';

const Editor = ({ addEmails, emails, removeEmail }: Props) => {
  const inputElement = useRef(null);

  const saveEmail = () => {
    if (!inputElement.current || !inputElement.current.value) {
      return false;
    }

    const newEmail = inputElement.current.value;
    inputElement.current.value = '';
    return addEmails([newEmail]);
  };

  const onKeyPress = (e) => {
    if (e.key !== ENTER_KEY_CODE && e.key !== COMMA_KEY_CODE) {
      return false;
    }
    e.preventDefault();
    return saveEmail();
  };

  const onPaste = (event) => {
    const text = event.clipboardData.getData('Text');
    event.preventDefault();
    if (!text) {
      return false;
    }

    const newEmails = text.replace(/\s/g, ',').split(',').filter((email) => email !== '');
    return addEmails(newEmails);
  };

  return (
    <div className="emails-editor">
      <EmailsList>
        {emails.map((email, index) => (
          <Email email={email} key={uuid()} removeEmail={() => removeEmail(index)} />
        ))}
        <Input ref={inputElement} onKeyPress={onKeyPress} onBlur={saveEmail} onPaste={onPaste} />
      </EmailsList>
    </div>
  );
};

export default Editor;
