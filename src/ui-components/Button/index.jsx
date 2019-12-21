// @flow
import React from 'react';
import './styles.pcss';

type Props = {
  children: string
};

const Button = ({ children }: Props) => (
  <button className="emails-button">
    {children}
  </button>
);

export default Button;
