import { FC, useState } from 'react';
import { Container, ActiveMenu, WrapperCenter } from './menu.styles';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setTitle } from '@/app/store/layout/layout.slice';

interface IMenuProps {
  logoActive: string;
  logoInActive: string;
  title: string;
}

const Menu: FC<IMenuProps> = ({ logoActive, logoInActive, title }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const onChangeMenu = () => {
    setActive(!active);
    dispatch(setTitle(title));
  };

  return (
    <Container onClick={() => onChangeMenu()}>
      <ActiveMenu active={active} />
      <WrapperCenter active={active}>
        <Image
          src={active ? logoActive : logoInActive}
          width={25}
          height={25}
          alt={title}
        />
        <span>{title}</span>
      </WrapperCenter>
    </Container>
  );
};

export default Menu;
