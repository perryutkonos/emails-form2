// @flow
import React from 'react';

type Props = {
  children: React.Node
};

const ButtonList = ({ children }: Props) => (
  <div className="emails-buttons">
    {children}
  </div>
);

export default ButtonList;
