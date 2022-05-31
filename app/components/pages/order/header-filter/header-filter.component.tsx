import { WrapperFilter, WrapperRow } from './header-filter.styles';
import ButtonFilter from '@/components/shared/button-filter/button-filter.component';

const HeaderFilter = () => {
  const filters = [
    {
      id: 1,
      title: 'New Order',
      color: 'primary',
    },
    {
      id: 2,
      title: 'Order on Process',
      color: 'outline_secondary',
    },
    {
      id: 3,
      title: 'Order Completed',
      color: 'outline_secondary',
    },
  ];

  return (
    <WrapperFilter>
      <WrapperRow>
        {filters.map(({ id, title, color }) => (
          <ButtonFilter key={id} title={title} color={color} />
        ))}
      </WrapperRow>
      <WrapperRow>
        <ButtonFilter title="History" color="outline_primary" />
        <ButtonFilter title="Add Order" color="primary" icon={true} />
      </WrapperRow>
    </WrapperFilter>
  );
};

export default HeaderFilter;
