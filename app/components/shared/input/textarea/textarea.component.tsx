import { FC, HTMLAttributes, useEffect, useRef } from 'react';
import { WrapperTextarea } from './textarea.styles';

interface ITextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  focus?: boolean;
}

const Textarea: FC<ITextareaProps> = ({ value, focus, ...props }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (focus) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    } else {
      inputRef.current?.blur();
    }
  }, [focus]);

  return <WrapperTextarea {...props} defaultValue={value} ref={inputRef} />;
};

export default Textarea;
