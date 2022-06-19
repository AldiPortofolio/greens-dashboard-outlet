import { FC } from 'react';
import { WrapperButton } from './button.styles';
import { PlusIcon } from '@heroicons/react/solid';
import Loader from '../loader/loader.component';

interface ITabFilterProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'outlinePrimary'
    | 'outlineSecondary'
    | 'outlineDanger';
  icon?: boolean;
  rounded: 'sm' | 'md' | 'full';
  size: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button: FC<ITabFilterProps> = ({
  title,
  color,
  icon,
  rounded,
  size,
  isLoading = false,
  ...props
}) => {
  return (
    <WrapperButton {...props} color={color} rounded={rounded} size={size}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {icon && <PlusIcon width={15} height={15} />}
          <span>{title}</span>
        </>
      )}
    </WrapperButton>
  );
};

export default Button;
