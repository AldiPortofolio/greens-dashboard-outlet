import { WrapperTable } from './table.styles';
import { FC, ReactNode } from 'react';

interface ITableProps {
  children: ReactNode;
  type: 'table-fixed' | 'table-auto';
}

const Table: FC<ITableProps> = ({ children, type }) => {
  return <WrapperTable type_table={type}>{children}</WrapperTable>;
};

export default Table;
