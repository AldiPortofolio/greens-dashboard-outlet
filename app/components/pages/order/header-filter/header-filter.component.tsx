import { WrapperFilter, WrapperRow } from './header-filter.styles';
import Button from '@/components/shared/button/button.component';
import ModalCreate from '../modal/create-order/create-order.component';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTabOrder } from '@/app/store/layout/layout.slice';
import { RootState } from '@/app/store/store';
import { useRouter } from 'next/router';
interface IFilters {
  id: string;
  title: string;
  url: string;
}

const HeaderFilter = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const tab = useSelector((state: RootState) => state.layout.tabOrder);
  const [openCreate, setOpenCreate] = useState<boolean>(false);

  const handlePage = (id: string, url: string) => {
    dispatch(setTabOrder(id));
    router.push(url);
  };

  const filters: Array<IFilters> = [
    {
      id: 'newOrder',
      title: 'New Order',
      url: '/order/new',
    },
    {
      id: 'orderonProcess',
      title: 'Order on Process',
      url: '/order/process',
    },
    {
      id: 'orderCompleted',
      title: 'Order Completed',
      url: '/order/completed',
    },
    {
      id: 'orderRejected',
      title: 'Order Rejected',
      url: '/order/rejected',
    },
  ];

  return (
    <>
      <ModalCreate
        open={openCreate}
        close={() => setOpenCreate(false)}
        back={() => setOpenCreate(true)}
      />
      <WrapperFilter>
        <WrapperRow>
          {filters.map(({ id, title, url }) => (
            <Button
              key={id}
              title={title}
              color={tab === id ? 'primary' : 'outlineSecondary'}
              rounded="md"
              size="sm"
              onClick={() => handlePage(id, url)}
            />
          ))}
        </WrapperRow>
        <WrapperRow>
          <Button
            title="History"
            color={tab === 'history' ? 'primary' : 'outlinePrimary'}
            rounded="md"
            size="sm"
            onClick={() => dispatch(setTabOrder('history'))}
          />
          <Button
            title="Add Order"
            color="primary"
            icon={true}
            rounded="md"
            size="sm"
            onClick={() => setOpenCreate(true)}
          />
        </WrapperRow>
      </WrapperFilter>
    </>
  );
};

export default HeaderFilter;
