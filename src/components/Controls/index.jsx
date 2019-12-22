// @flow
import React from 'react';
import type { Emails } from '../../types/emails';

import Button from '../../ui-components/Button';
import ButtonList from '../../ui-components/ButtonList';

import { randEmail } from '../../utils/generateEmail';
import { validateEmail } from '../../utils/validators';

import './styles.pcss';

type Props = {
  addEmails: Emails => void,
  emails: Emails
};

const Controls = ({ addEmails, emails }: Props) => {
  const addRandomEmail = () => {
    addEmails([randEmail()]);
  };

  const getAllValidateEmails = () => {
    const count = emails.filter(validateEmail).length;
    // eslint-disable-next-line no-alert
    window.alert(`Valid Emails Count: ${count}`);
  };
  return (
    <div className="emails-controls">
      <ButtonList>
        <Button onClick={addRandomEmail}>Add email</Button>
        <Button onClick={getAllValidateEmails}>Get emails count</Button>
      </ButtonList>
    </div>
  );
};

export default Controls;
