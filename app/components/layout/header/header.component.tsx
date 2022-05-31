import {
  Divider,
  WrapperBetween,
  WrapperFlex,
  WrapperHeader,
} from './header.styles';
import Title from './title/title.component';
import IconsMenu from './icons-menu/icons-menu.component';
import Brand from './brand/brand.component';

const Header = () => {
  return (
    <WrapperHeader>
      <WrapperFlex>
        <Brand />
        <Divider />
        <WrapperBetween>
          <Title />
          <IconsMenu />
        </WrapperBetween>
      </WrapperFlex>
    </WrapperHeader>
  );
};

export default Header;
