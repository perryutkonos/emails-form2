// @flow
import React from 'react';
import './styles.pcss';

type Props = {
  size?: number,
  onClose: Function
};

const Close = ({ size = 8, onClose }: Props) => (
  <button className="emails-close" onClick={onClose} type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z" fill="#050038" />
    </svg>
  </button>
);

export default Close;
