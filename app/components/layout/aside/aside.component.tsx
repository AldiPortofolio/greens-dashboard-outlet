import { WrapperAside, WrapperFlex } from './aside.styles';
import { useSelector } from 'react-redux';
import Menu from './menu/menu.component';
import MenuNoIcon from './menu/menu-noicon.component';
import DashboardInActive from '@/app/assets/dashboard-inactive.svg';
import DashboardActive from '@/app/assets/dashboard-active.svg';
import MenuInActive from '@/app/assets/menu-inactive.svg';
import MenuActive from '@/app/assets/menu-active.svg';
import GreensPodInActive from '@/app/assets/greenspod-inactive.svg';
import GreensPodActive from '@/app/assets/greenspod-active.svg';
import SettingsInActive from '@/app/assets/settings-inactive.svg';
import SettingsActive from '@/app/assets/settings-active.svg';
import OrderActive from '@/app/assets/order-active.svg';
import OrderInActive from '@/app/assets/order-inactive.svg';
import { RootState } from '@/app/store/store';

const Aside = () => {
  const menuActive = useSelector((state: RootState) => state.layout.menuActive);
  const menus = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      logoActive: DashboardActive,
      logoInActive: DashboardInActive,
      tab: '',
      url: '/',
    },
    {
      id: 'orders',
      title: 'Orders',
      logoActive: OrderActive,
      logoInActive: OrderInActive,
      tab: 'newOrder',
      url: '/order/new',
    },
    {
      id: 'menus',
      title: 'Menu',
      logoActive: MenuActive,
      logoInActive: MenuInActive,
      tab: '',
      url: '/menus',
    },
    {
      id: 'greens-pod',
      title: 'GreensPod',
      logoActive: GreensPodActive,
      logoInActive: GreensPodInActive,
      tab: '',
      url: '/greens-pod',
    },
    {
      id: 'settings',
      title: 'Settings',
      logoActive: SettingsActive,
      logoInActive: SettingsInActive,
      tab: '',
      url: '/settings',
    },
  ];

  return (
    <WrapperAside>
      <WrapperFlex>
        {menus.map(({ id, title, logoActive, logoInActive, tab, url }) => (
          <Menu
            key={id}
            id={id}
            title={title}
            logoActive={logoActive}
            logoInActive={logoInActive}
            tab={tab}
            url={url}
            active={menuActive === id}
          />
        ))}
        <MenuNoIcon />
      </WrapperFlex>
    </WrapperAside>
  );
};

export default Aside;
