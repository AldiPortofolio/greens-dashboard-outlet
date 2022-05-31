import { FC, SVGProps } from 'react';
import Image from 'next/image';
import { TabButton } from './button-filter.styles';
import { PlusIcon } from '@heroicons/react/solid';

interface ITabFilterProps {
  title: string;
  color: string;
  icon?: boolean;
  type?: string;
}

const ButtonFilter: FC<ITabFilterProps> = ({ title, color, icon, type }) => {
  return (
    <TabButton color={color} type_btn={type}>
      {icon && <PlusIcon width={15} height={15} />}
      <span>{title}</span>
    </TabButton>
  );
};

export default ButtonFilter;
