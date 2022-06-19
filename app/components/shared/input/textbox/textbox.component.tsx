/* eslint-disable react/display-name */
import React, { FC, HTMLAttributes } from 'react';
import { useEffect, useRef } from 'react';
import { WrapperTextbox } from './textbox.styles';

interface ITextboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  borderFocusColor: 'primary' | 'danger';
  focus?: boolean;
}

const Textbox: FC<ITextboxProps> = ({ borderFocusColor, focus, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (focus) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [focus]);

  return (
    <WrapperTextbox
      {...props}
      type="text"
      borderFocusColor={borderFocusColor}
      ref={inputRef}
    />
  );
};

export default Textbox;
