import { ReactNode, FC } from 'react';
import Header from './header/header.component';
import Aside from './aside/aside.component';
import Body from './body/body.component';
import {
  Divider,
  WrapperFlexCol,
  WrapperMenuAndContent,
} from './layout.styles';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <WrapperFlexCol>
      <Header />
      <WrapperMenuAndContent>
        <Aside />
        <Divider />
        <Body>{children}</Body>
      </WrapperMenuAndContent>
    </WrapperFlexCol>
  );
};

export default Layout;
