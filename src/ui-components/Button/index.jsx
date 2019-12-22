// @flow
import React from 'react';
import './styles.pcss';

type Props = {
  children: string,
  onClick: Function
};

const Button = ({ children, onClick }: Props) => (
  <button className="emails-button" onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;
