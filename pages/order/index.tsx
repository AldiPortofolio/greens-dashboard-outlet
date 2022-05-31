import OrderSection from '@/components/pages/order/order.component';
import HeaderFilter from '@/components/pages/order/header-filter/header-filter.component';
import ListData from '@/components/pages/order/list-data/list-data.component';

const IndexPage = () => {
  return (
    <OrderSection>
      <HeaderFilter />
      <ListData />
    </OrderSection>
  );
};

export default IndexPage;
