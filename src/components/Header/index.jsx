// @flow
import React from 'react';
import './style.pcss';

type Props = {
  title: string
};

const Header = ({ title }: Props) => {
  return (
    <div className="emails-header">
      <div className="emails-header__text">
        Share <span className="emails-header__text-title">{title}</span> with others
      </div>
    </div>
  );
}

export default Header;
