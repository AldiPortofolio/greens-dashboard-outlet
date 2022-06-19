import dynamic from 'next/dynamic';
import MenuSection from '@/components/pages/menu/menu.component';
import HeaderFilter from '@/components/pages/menu/header-filter/header-filter.component';
import ListData from '@/components/pages/menu/list-data/list-data.component';
import { wrapper } from '@/app/store/store';
import { menusApiSlice, selectAllMenus } from '@/app/store/menu/menu.slice';

const AppLayout = dynamic(
  () => import('@/app/components/layout/layout.component'),
  { ssr: false }
);

const IndexPage = () => {
  return (
    <MenuSection>
      <HeaderFilter />
      <ListData />
    </MenuSection>
  );
};

IndexPage.layout = AppLayout;

IndexPage.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async ({ req }) => {
      if (req) {
        // server
        return { page: {} };
      } else {
        await dispatch(menusApiSlice.endpoints.geMenus.initiate(null));
      }
    }
);

export default IndexPage;
