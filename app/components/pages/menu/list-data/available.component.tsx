/* eslint-disable @next/next/no-img-element */
import Card from '../card/card.component';
import { WrapperList } from './list-data.styles';
import ModalDetails from '../modal/details/details.component';
import { useState } from 'react';
import { useAppSelector } from '@/app/store/hooks';
import { selectAllMenusAvailable } from '@/app/store/menu/menu.slice';

const ListData = () => {
  const menus = useAppSelector(selectAllMenusAvailable);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [type, setType] = useState<'on' | 'off'>('on');
  return (
    <>
      <ModalDetails
        open={openDetails}
        close={() => setOpenDetails(false)}
        type={type}
        back={() => setOpenDetails(true)}
        id={id}
      />
      <WrapperList>
        {menus?.map((menu: any) => (
          <Card
            key={menu._id}
            type={menu.onSale ? 'on' : 'off'}
            openDetails={() => {
              setOpenDetails(true);
              setId(menu._id);
              setType(menu.onSale ? 'on' : 'off');
            }}
            menu={menu}
          />
        ))}
      </WrapperList>
    </>
  );
};

export default ListData;
