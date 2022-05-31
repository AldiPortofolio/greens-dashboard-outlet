import Image from 'next/image';
import { DropdownProfile, WrapperIcons } from './icons-menu.styles';
import History from '@/app/assets/history.svg';
import Notif from '@/app/assets/notif.svg';

const IconsMenu = () => {
  return (
    <WrapperIcons>
      <Image
        src={History}
        alt="Logo"
        width={27}
        height={27}
        className="cursor-pointer"
      />
      <Image
        src={Notif}
        alt="Logo"
        width={30}
        height={30}
        className="cursor-pointer"
      />
      <DropdownProfile>A</DropdownProfile>
    </WrapperIcons>
  );
};

export default IconsMenu;
