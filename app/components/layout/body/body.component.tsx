import { FC, ReactNode } from 'react';
import { Container } from './body.styles';

interface IBodyProps {
  children: ReactNode;
}

const Body: FC<IBodyProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Body;
