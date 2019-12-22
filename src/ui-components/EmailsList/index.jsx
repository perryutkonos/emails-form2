// @flow
import type { Node } from 'react';
import React from 'react';
import './styles.pcss';

type Props = {
  children: Node
};

const EmailList = ({ children }: Props) => (
  <div className="emails-list">
    {children}
  </div>
);

export default EmailList;
