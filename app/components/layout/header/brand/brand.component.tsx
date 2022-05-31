import Image from 'next/image';
import Logo from '@/app/assets/logo.svg';
import { WrapperBrand } from './brand.styles';

const Brand = () => {
  return (
    <WrapperBrand>
      <Image src={Logo} alt="Logo" width={130} height={130} />
    </WrapperBrand>
  );
};

export default Brand;
