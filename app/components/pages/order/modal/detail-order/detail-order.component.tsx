import Modal from '@/components/shared/modal/modal.component';
import { FC, useEffect, useState } from 'react';
import {
  WrapperBody,
  WrapperFooter,
  WrapperTitle,
} from './detail-order.styles';
import { XIcon } from '@heroicons/react/outline';
import Table from '@/components/shared/table/table.component';
import Textarea from '@/components/shared/input/textarea/textarea.component';
import Button from '@/components/shared/button/button.component';
import ModalScanCode from '../scan-code/scan-code.component';
import ModalConfirm from '@/components/shared/modal/modal-confirm.component';
import { useAppSelector } from '@/app/store/hooks';
import {
  selectOrdersById,
  useUpdateStateOrderMutation,
} from '@/app/store/order/order.slice';

interface IModalInterface {
  open: boolean;
  close: any;
  id: string;
}

const DetailOrder: FC<IModalInterface> = ({ open, close, id }) => {
  const [updateState, { isLoading }] = useUpdateStateOrderMutation();
  const order = useAppSelector((state) => selectOrdersById(state, id));
  const [openModal, setOpenModal] = useState(false);
  const [openModalAccept, setOpenModalAccept] = useState(false);
  const [openModalConfirm, setModalConfirm] = useState(false);
  const [openModalConfirmAccept, setModalConfirmAccept] = useState(false);
  const [payloadDecline, setPayloadDecline] = useState<{
    status: string;
    code: string;
    kitchenNotes: string;
  }>({
    status: 'REJECTED',
    code: order?.invoiceId,
    kitchenNotes: '',
  });
  const [modalData, setModalData] = useState<{
    title: string;
    description: string;
    icons: 'success' | 'error';
    typeModal: 'success' | 'error';
  }>({
    title: '',
    description: '',
    icons: 'success',
    typeModal: 'success',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayloadDecline({ ...payloadDecline, [name]: value });
  };

  const handleDecline = async () => {
    await updateState({ id: order?._id, payload: payloadDecline });
    setModalData({
      title: 'Order Declined',
      description: 'Order successfuly declined',
      icons: 'success',
      typeModal: 'error',
    });
    setOpenModal(false);
    setModalConfirm(true);
  };

  const handleAccept = async () => {
    await updateState({
      id: order?._id,
      payload: { status: 'ACCEPTED', code: payloadDecline.code },
    });
    setOpenModalAccept(false);
    setModalConfirmAccept(true);
  };

  useEffect(() => {
    setPayloadDecline({
      status: 'REJECTED',
      code: order?.invoiceId,
      kitchenNotes: '',
    });
  }, [order]);

  return (
    <>
      <ModalScanCode
        open={openModal}
        close={() => setOpenModal(false)}
        type="decline"
        handleSubmit={handleDecline}
        handleChange={handleChange}
        payload={payloadDecline}
        loading={isLoading}
      />
      <ModalScanCode
        open={openModalAccept}
        close={() => setOpenModalAccept(false)}
        type="accept"
        handleSubmit={handleAccept}
        handleChange={handleChange}
        payload={payloadDecline}
        loading={isLoading}
      />
      <ModalConfirm
        open={openModalConfirm}
        close={() => setModalConfirm(false)}
        title={modalData.title}
        description={modalData.description}
        icons={modalData.icons}
        typeModal={modalData.typeModal}
      />
      <ModalConfirm
        open={openModalConfirmAccept}
        close={() => setModalConfirmAccept(false)}
        title="Captain Order Printed"
        description="Please put the captain order sticker on the box."
        icons="success"
        typeModal="success"
      />
      {/* <ModalScanCode
        open={openModal}
        close={() => setOpenModal(false)}
        type={typeModal}
        payload={payloadDecline}
      /> */}
      <Modal open={open} close={close}>
        <WrapperTitle>
          <div className="flex flex-col items-start w-full">
            <div className="flex justify-between w-full">
              <span>New Order</span>
              <XIcon
                height={20}
                width={20}
                className="cursor-pointer"
                onClick={close}
              />
            </div>
            <p>{order?.name}</p>
          </div>
        </WrapperTitle>
        <WrapperBody>
          <Table type="table-fixed">
            <thead>
              <tr>
                <th className=""></th>
                <th className="w-3/4">Order</th>
                <th className="w-1/4">Ingredients</th>
              </tr>
            </thead>
            <tbody>
              {order?.items?.map((item: any, index: number) => (
                <tr key={item?._id}>
                  <td></td>
                  <td>
                    <p>
                      {item.title} -{' '}
                      <span className="main-color">x{item.count}</span>
                    </p>
                  </td>
                  <td>
                    <p>Available</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table type="table-fixed">
            <thead>
              <tr>
                <th className="pl-3">Notes</th>
              </tr>
            </thead>
          </Table>
          <Textarea value={order?.notes} />
          <WrapperFooter>
            <Button
              color="outlineDanger"
              size="md"
              title="Decline"
              rounded="sm"
              onClick={() => {
                close();
                setOpenModal(true);
              }}
            />
            <Button
              color="primary"
              size="md"
              title="Accept"
              rounded="sm"
              onClick={() => {
                close();
                setOpenModalAccept(true);
              }}
            />
          </WrapperFooter>
        </WrapperBody>
      </Modal>
    </>
  );
};

export default DetailOrder;
