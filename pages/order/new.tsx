import OrderSection from '@/components/pages/order/order.component';
import HeaderFilter from '@/components/pages/order/header-filter/header-filter.component';
import ListData from '@/components/pages/order/list-data/new.component';
import dynamic from 'next/dynamic';
import { wrapper } from '@/app/store/store';
import { orderApiSlice } from '@/app/store/order/order.slice';

const AppLayout = dynamic(
  () => import('@/app/components/layout/layout.component'),
  { ssr: false }
);

const IndexPage = () => {
  return (
    <OrderSection>
      <HeaderFilter />
      <ListData />
    </OrderSection>
  );
};

IndexPage.layout = AppLayout;

IndexPage.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async ({ req }) => {
      if (req) {
        return { page: {} };
      } else {
        await dispatch(orderApiSlice.endpoints.geOrdersPending.initiate(''));
      }
    }
);

export default IndexPage;
