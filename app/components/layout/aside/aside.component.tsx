import { WrapperAside, WrapperFlex } from './aside.styles';
import Menu from './menu/menu.component';
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

const Aside = () => {
  const menus = [
    {
      id: 1,
      title: 'Dashboard',
      logoActive: DashboardActive,
      logoInActive: DashboardInActive,
    },
    {
      id: 2,
      title: 'Order',
      logoActive: OrderActive,
      logoInActive: OrderInActive,
    },
    {
      id: 3,
      title: 'Menu',
      logoActive: MenuActive,
      logoInActive: MenuInActive,
    },
    {
      id: 4,
      title: 'GreensPod',
      logoActive: GreensPodActive,
      logoInActive: GreensPodInActive,
    },
    {
      id: 5,
      title: 'Settings',
      logoActive: SettingsActive,
      logoInActive: SettingsInActive,
    },
  ];

  return (
    <WrapperAside>
      <WrapperFlex>
        {menus.map(({ id, title, logoActive, logoInActive }) => (
          <Menu
            key={id}
            title={title}
            logoActive={logoActive}
            logoInActive={logoInActive}
          />
        ))}
      </WrapperFlex>
    </WrapperAside>
  );
};

export default Aside;
