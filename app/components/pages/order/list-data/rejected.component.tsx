/* eslint-disable @next/next/no-img-element */
import Table from '@/components/shared/table/table.component';
import RejectedSVG from '@/app/assets/rejected.svg';
import { selectAllOrdersRejected } from '@/app/store/order/order.slice';
import { useAppSelector } from '@/app/store/hooks';
import moment from 'moment';

const ListDataNew = () => {
  const orders = useAppSelector(selectAllOrdersRejected);
  return (
    <>
      <Table type="table-fixed">
        <thead>
          <tr>
            <th></th>
            <th>Customer</th>
            <th>Order</th>
            <th>Time</th>
            <th>Status</th>
            <th>Note</th>
            <th>Reason</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>
                {order.name} <p>+{order.phoneNum}</p>
              </td>
              <td className="w-72">
                <div className="flex flex-col gap-2">
                  {order?.items?.map((item: any, index: number) => {
                    return (
                      <div key={item._id}>
                        {index > 0 && <hr />}
                        <p>
                          {item.title}&nbsp;-&nbsp;
                          <span>x{item.count}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </td>
              <td>
                <p>{moment(order.updatedAt).format('hh:mm')}</p>
              </td>
              <td>
                <p>Completed</p>
              </td>
              <td>
                <p>{order?.notes || '-'}</p>
              </td>
              <td>
                <p>{order?.kitchenNotes || '-'}</p>
              </td>
              <td>
                <img src={RejectedSVG} alt="icon" height={15} width={15} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListDataNew;
