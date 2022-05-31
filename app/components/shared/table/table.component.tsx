import { WrapperTable } from './table.styles';
import { FC, ReactNode } from 'react';

interface ITableProps {
  children: ReactNode;
}

const Table: FC<ITableProps> = ({ children }) => {
  return <WrapperTable>{children}</WrapperTable>;
};

export default Table;
