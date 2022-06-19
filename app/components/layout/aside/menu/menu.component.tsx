import { FC, useState } from 'react';
import { Container, ActiveMenu, WrapperCenter } from './menu.styles';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import {
  setTitle,
  setTabOrder,
  setMenuActive,
} from '@/app/store/layout/layout.slice';
import { useRouter } from 'next/router';

interface IMenuProps {
  id: string;
  logoActive: string;
  logoInActive: string;
  title: string;
  tab: string;
  url: string;
  active: boolean;
}

const Menu: FC<IMenuProps> = ({
  id,
  logoActive,
  logoInActive,
  title,
  tab,
  url,
  active,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onChangeMenu = () => {
    dispatch(setMenuActive(id));
    dispatch(setTitle(title));
    dispatch(setTabOrder(tab));
    router.push(url);
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
