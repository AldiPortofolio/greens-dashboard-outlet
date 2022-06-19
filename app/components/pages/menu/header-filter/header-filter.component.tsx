import { WrapperFilter, WrapperRow } from './header-filter.styles';
import Button from '@/components/shared/button/button.component';
import ModalCreate from '../modal/create-menu/create-menu.component';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTabMenu } from '@/app/store/layout/layout.slice';
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
  const tab = useSelector((state: RootState) => state.layout.tabMenu);
  const [openCreate, setOpenCreate] = useState<boolean>(false);

  const handlePage = (id: string, url: string) => {
    dispatch(setTabMenu(id));
    router.push(url);
  };

  const filters: Array<IFilters> = [
    {
      id: 'allMenu',
      title: 'All Menu',
      url: '/menus',
    },
    {
      id: 'available',
      title: 'Available',
      url: '/menus/available',
    },
    {
      id: 'notAvailable',
      title: 'Not Available',
      url: '/menus/not-available',
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
            title="Add Menu"
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
