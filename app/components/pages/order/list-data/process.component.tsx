import { useState } from 'react';
import Table from '@/components/shared/table/table.component';
import Button from '@/components/shared/button/button.component';
import DetailOrder from '../modal/input-batch/input-batch.component';
import { selectAllOrdersProcess } from '@/app/store/order/order.slice';
import { useAppSelector } from '@/app/store/hooks';
import moment from 'moment';

const ListDataNew = () => {
  const orders = useAppSelector(selectAllOrdersProcess);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState('');
  return (
    <>
      <DetailOrder
        open={openModal}
        close={() => setOpenModal(false)}
        back={() => setOpenModal(true)}
        id={id}
      />
      <Table type="table-fixed">
        <thead>
          <tr>
            <th></th>
            <th>Customer</th>
            <th>Order</th>
            <th>Time</th>
            <th>Status</th>
            <th>Note</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order: any, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>
                {order?.name} <p>+{order?.phoneNum}</p>
              </td>
              <td className="w-72">
                <div className="flex flex-col gap-2">
                  {order?.items?.map((item: any, index: number) => {
                    return (
                      <div key={item?._id}>
                        {index > 0 && <hr />}
                        <p>
                          {item?.title}&nbsp;-&nbsp;
                          <span>x{item?.count}</span>
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
                <p>Processing</p>
              </td>
              <td>
                <p>{order?.notes}</p>
              </td>
              <td>
                <Button
                  color="outlinePrimary"
                  title="Input Batch"
                  rounded="sm"
                  onClick={() => {
                    setId(order._id);
                    setOpenModal(true);
                  }}
                  size="sm"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListDataNew;
