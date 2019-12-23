// @flow
import React from 'react';
import './styles.pcss';

type Props = {
  onKeyPress: Function,
  onBlur: Function,
  onPaste: Function,
  inputPlaceHolder: string
}

const Input = React.forwardRef<Props, any>(
  ({
    onKeyPress, onBlur, onPaste, inputPlaceHolder,
  }: Props, ref: any) => (
    <div className="email-input">
      <input
        type="text"
        ref={ref}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        onPaste={onPaste}
        placeholder={inputPlaceHolder}
      />
    </div>
  ),
);

export default Input;
