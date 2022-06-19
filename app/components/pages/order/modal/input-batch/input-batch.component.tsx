/* eslint-disable @next/next/no-img-element */
import Modal from '@/components/shared/modal/modal.component';
import { FC, useEffect, useState } from 'react';
import { WrapperBody, WrapperFooter, WrapperTitle } from './input-batch.styles';
import { XIcon } from '@heroicons/react/outline';
import Table from '@/components/shared/table/table.component';
import Textarea from '@/components/shared/input/textarea/textarea.component';
import Button from '@/components/shared/button/button.component';
import ModalEditBatch from '../edit-batch/edit-batch.component';
import ModalConfirm from '@/components/shared/modal/modal-confirm.component';
import EditSVG from '@/app/assets/edit.svg';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  selectOrdersProcessById,
  useUpdateItemSetProductMutation,
  useUpdateStateOrderMutation,
} from '@/app/store/order/order.slice';
import {
  setDataBatches,
  setUpdateDataBatches,
} from '@/app/store/order/create-order.slice';
import produce from 'immer';

interface IModalInterface {
  open: boolean;
  close: any;
  back: any;
  id: string;
}

const DetailOrder: FC<IModalInterface> = ({ open, close, back, id }) => {
  const dispatch = useAppDispatch();
  const [updateSetItem, { isLoading }] = useUpdateItemSetProductMutation();
  const [updateState, { isLoading: isLoadingState }] =
    useUpdateStateOrderMutation();
  const order = useAppSelector((state) => selectOrdersProcessById(state, id));
  const datas: any = useAppSelector((state) => state.createOrder.listBatches);
  const [openModalEditBatch, setOpenEditBatch] = useState(false);
  const [openModalConfirm, setOpenConfirm] = useState(false);
  const [idProduct, setIdProduct] = useState('');

  useEffect(() => {
    dispatch(setDataBatches(order));
  }, [dispatch, order]);

  const handleSave = () => {
    back();
    const nextItems = produce(datas?.items, (draftState: any) => {
      datas.items?.map((_key: any, idx: number) => {
        return (draftState[idx]['isAdded'] = true);
      });
    });

    const nextState = produce(datas, (draftState: any) => {
      draftState.items = nextItems;
    });
    dispatch(setUpdateDataBatches(nextState));
  };

  const handleDone = async () => {
    if (datas?.items) {
      datas?.items?.map(async (item: any) => {
        let codeBatches: any[] = [];
        item?.productTypeList.map((batch: any) => {
          codeBatches = [...codeBatches, ...batch.batches];
        });
        const products = codeBatches;
        const payload = { id: item._id, products };
        await updateSetItem(payload).unwrap();
      });
    }
    const body = { status: 'DONE', code: datas?.invoiceId };
    await updateState({ id: datas._id, payload: body }).unwrap();
    close();
    setOpenConfirm(true);
  };

  return (
    <>
      <ModalEditBatch
        open={openModalEditBatch}
        close={() => setOpenEditBatch(false)}
        save={handleSave}
        back={() => setOpenEditBatch(true)}
        id={idProduct}
      />

      <ModalConfirm
        open={openModalConfirm}
        close={() => setOpenConfirm(false)}
        typeModal="success"
        icons="success"
        title="Order Completed"
        description="The order is ready."
      />

      <Modal open={open} close={close} size="lg">
        <WrapperTitle>
          <div className="flex flex-col items-start w-full">
            <div className="flex justify-between w-full">
              <span>On Process</span>
              <XIcon
                height={20}
                width={20}
                className="cursor-pointer"
                onClick={close}
              />
            </div>
            <p>{datas?.name}</p>
          </div>
        </WrapperTitle>
        <WrapperBody>
          <Table type="table-fixed">
            <thead>
              <tr>
                <th className=""></th>
                <th className="w-[50%]">Order</th>
                <th className="w-[20%]">Product</th>
                <th className="w-[15%]">Batch</th>
                <th className="w-[15%]"></th>
              </tr>
            </thead>
            <tbody>
              {datas?.items?.map((item: any, index: number) => (
                <tr key={item?._id}>
                  <td></td>
                  <td>
                    <p>
                      {item?.title} -{' '}
                      <span className="main-color">x{item?.count}</span>
                    </p>
                  </td>
                  <td>
                    <p>{item?.productTypeList?.length}</p>
                  </td>
                  <td>
                    <p className="main-color">
                      {item?.isAdded ? 'Added' : '-'}
                    </p>
                  </td>
                  <td>
                    <img
                      src={EditSVG}
                      alt="icon"
                      height={25}
                      width={25}
                      className="cursor-pointer"
                      onClick={() => {
                        close();
                        setOpenEditBatch(true);
                        setIdProduct(item?._id);
                      }}
                    />
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
          <Textarea value="Jangan Menggunakan Kacang dan Susu" />
          <WrapperFooter>
            <Button
              color="primary"
              size="md"
              title="Done"
              rounded="sm"
              type="button"
              onClick={handleDone}
              isLoading={isLoadingState}
            />
          </WrapperFooter>
        </WrapperBody>
      </Modal>
    </>
  );
};

export default DetailOrder;
