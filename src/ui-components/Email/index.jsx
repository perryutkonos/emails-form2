// @flow
import React from 'react';
import Close from '../Close';

import { validateEmail } from '../../utils/validators';

import './styles.pcss';

type Props = {
  email: string,
  removeEmail: () => void
};

const Email = ({ email, removeEmail }: Props) => {
  const additionalClass = !validateEmail(email) ? 'emails-item--error' : '';

  return (
    <div className={`emails-item ${additionalClass}`}>
      {email}
      <Close onClose={removeEmail} />
    </div>
  );
};

export default Email;
