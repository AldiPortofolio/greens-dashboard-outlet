import { Container, ActiveMenu, WrapperCenter } from './menu.styles';
import { useAppDispatch } from '@/app/store/hooks';
import { logout } from '@/app/store/auth/auth.slice';
import { useRouter } from 'next/router';

const Menu = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onChangeMenu = () => {
    dispatch(logout());
    router.replace('/login');
  };

  return (
    <Container onClick={() => onChangeMenu()}>
      <ActiveMenu active={false} />
      <WrapperCenter active={false}>
        <div className="w-[25px]" />
        <span>Logout</span>
      </WrapperCenter>
    </Container>
  );
};

export default Menu;
