// @flow
import React, { useRef, useCallback } from 'react';
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
const SPACE_KEY_CODE = ' ';
const COMMA_KEY_CODE = ',';

const Editor = React.forwardRef<Props, any>(
  ({ addEmails, emails, removeEmail }: Props, ref: any) => {
    const inputElement = useRef(null);

    const saveEmail = useCallback(() => {
      if (!inputElement.current || !inputElement.current.value) {
        return false;
      }

      const newEmail = inputElement.current.value;
      inputElement.current.value = '';
      return addEmails([newEmail]);
    }, [addEmails]);

    const onKeyPress = useCallback((event) => {
      if (![ENTER_KEY_CODE, COMMA_KEY_CODE, SPACE_KEY_CODE].includes(event.key)) {
        return false;
      }
      event.preventDefault();
      return saveEmail();
    }, [saveEmail]);

    const onPaste = useCallback((event) => {
      const text = event.clipboardData.getData('Text');
      if (!text) {
        return false;
      }

      event.preventDefault();
      const newEmails = text.replace(/\s/g, ',').split(',').filter((email) => email !== '');
      return addEmails(newEmails);
    }, [addEmails]);

    const inputPlaceHolder = emails.length ? 'add more people...' : 'add people...';

    return (
      <div className="emails-editor" ref={ref}>
        <EmailsList>
          {emails.map((email, index) => (
            <Email email={email} key={uuid()} removeEmail={() => removeEmail(index)} />
          ))}
          <Input
            ref={inputElement}
            onKeyPress={onKeyPress}
            onBlur={saveEmail}
            onPaste={onPaste}
            inputPlaceHolder={inputPlaceHolder}
          />
        </EmailsList>
      </div>
    );
  },
);

export default Editor;
