import { WrapperSection } from './menu.styles';

interface IOrderProps {
  children: React.ReactNode;
}

const Order: React.FC<IOrderProps> = ({ children }) => {
  return <WrapperSection>{children}</WrapperSection>;
};

export default Order;
