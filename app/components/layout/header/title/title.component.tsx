import { useSelector } from 'react-redux';
import { WrapperTitle } from './title.styles';

const Title = () => {
  const title = useSelector((state: any) => state.layout.title);
  return (
    <WrapperTitle>
      <span>{title}</span>
    </WrapperTitle>
  );
};

export default Title;
