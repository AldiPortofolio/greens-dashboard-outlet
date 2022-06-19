import Modal from '@/components/shared/modal/modal.component';
import { XIcon, CheckIcon, PlusIcon, MinusIcon } from '@heroicons/react/solid';
import React, { FC, useEffect, useState, memo } from 'react';
import {
  WrapperBody,
  WrapperListMenu,
  WrapperMenu,
  WrapperTitle,
} from './create-order.styles';
import Button from '@/components/shared/button/button.component';
import ModalConfirmOrder from '../confirm-order/confirm-order.component';
import ModalConfirm from '@/components/shared/modal/modal-confirm.component';
import { selectAllMenus } from '@/app/store/menu/menu.slice';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import {
  setDataMenus,
  setUpdateDataMenus,
} from '@/app/store/order/create-order.slice';
import produce from 'immer';
import { RootState } from '@/app/store/store';
import { useCreateOrderMutation } from '@/app/store/order/order.slice';

interface IModalProps {
  open: boolean;
  close: any;
  back: any;
}

interface IPayload {
  name: string;
  phoneNum: string;
  address: string;
  notes: string;
  invoiceId: string;
  items: [];
}

const ModalCreate: FC<IModalProps> = ({ open, close, back }) => {
  const dispatch = useAppDispatch();
  const [createOrder, { isLoading, isError, isSuccess, error: messageError }] =
    useCreateOrderMutation();
  const menus = useAppSelector(selectAllMenus);
  const datas = useAppSelector(
    (state: RootState) => state.createOrder.listMenus
  );
  const [openConfirmOrder, setOpenConfirmOrder] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [payload, setPayload] = useState<IPayload>({
    name: '',
    phoneNum: '',
    address: '',
    notes: '',
    invoiceId: 'dummy1',
    items: [],
  });
  const [modalData, setModalData] = useState<any>({
    typeModal: 'success',
    icons: 'success',
    title: 'Order Created',
    description: 'The order is Successfully added to new order.',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const reset = () => {
    setPayload({
      name: '',
      phoneNum: '',
      address: '',
      notes: '',
      invoiceId: '',
      items: [],
    });
  };

  const addProduct = (id: string) => {
    let nextData: any = [];
    datas?.forEach((key: any, index) => {
      nextData = produce(datas, (draftState) => {
        const menu: any = draftState.find((data: any) => data._id === id);
        menu.count += 1;
      });
    });
    dispatch(setUpdateDataMenus(nextData));
  };

  const removeProduct = (id: string) => {
    let nextData: any = [];
    datas?.forEach((key: any, index) => {
      nextData = produce(datas, (draftState) => {
        const menu: any = draftState.find((data: any) => data._id === id);
        if (menu.count > 0) menu.count -= 1;
      });
    });
    dispatch(setUpdateDataMenus(nextData));
  };

  const handleContinue = () => {
    const items: any = datas.filter((data: any) => data.count > 0);
    setPayload({ ...payload, items });
    close();
    setOpenConfirmOrder(true);
  };

  const handleSubmit = async () => {
    let items: any = [];
    const newItems: any = datas.filter((data: any) => data.count > 0);
    await newItems.map((item: any) => {
      const newItem: any = {
        ...item,
        amount: item.count,
      };
      items.push(newItem);
    });
    setPayload({ ...payload, items });

    const newPayload = { ...payload, invoiceId: 'dummy1', items };

    try {
      await createOrder(newPayload);

      if (!isLoading && isSuccess) {
        setModalData({
          typeModal: 'success',
          icons: 'success',
          title: 'Order Created',
          description: 'The order is Successfully added to new order.',
        });
      }

      if (!isLoading && isError) {
        const newMessage: any = messageError;
        setModalData({
          typeModal: 'error',
          icons: 'error',
          title: 'Error',
          description: newMessage?.data?.message,
        });
      }
    } catch (error) {
      setModalData({
        typeModal: 'error',
        icons: 'error',
        title: 'Error',
        description: error,
      });
    }
    reset();

    setOpenConfirmOrder(false);
    setOpenConfirm(true);
  };

  useEffect(() => {
    dispatch(setDataMenus(menus));
  }, [dispatch, menus]);

  return (
    <>
      <ModalConfirmOrder
        open={openConfirmOrder}
        close={() => setOpenConfirmOrder(false)}
        back={back}
        submit={handleSubmit}
        data={payload}
        loading={isLoading}
      />
      <ModalConfirm
        open={openConfirm}
        close={() => setOpenConfirm(false)}
        typeModal={modalData.typeModal}
        icons={modalData.icons}
        title={modalData.title}
        description={modalData.description}
      />
      <Modal open={open} close={close}>
        <WrapperTitle>
          <div className="flex flex-col items-start w-full">
            <div className="flex justify-between w-full">
              <span>Make New Order</span>
              <XIcon
                height={20}
                width={20}
                className="cursor-pointer"
                onClick={close}
              />
            </div>
          </div>
        </WrapperTitle>
        <WrapperBody className="flex flex-col py-[16px] px-[30px] gap-4">
          <input
            type="text"
            value={payload.name}
            placeholder="Customer Full Name"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={payload.phoneNum}
            placeholder="Customer Phone Number"
            name="phoneNum"
            onChange={handleChange}
          />
          <span className="mt-3 span-title">Menu List</span>
          <WrapperListMenu className="overflow-auto flex flex-col">
            {datas?.map((menu: any, index: number) => {
              return (
                <div key={index}>
                  {index > 0 && (
                    <div className="border-t border-gray-300"></div>
                  )}
                  <WrapperMenu className="flex justify-between items-center">
                    <span className="pr-3">{menu?.title}</span>
                    <div className="flex flex-row">
                      <button
                        className="button-minus flex justify-center items-center"
                        type="button"
                        onClick={() => removeProduct(menu?._id)}
                      >
                        <MinusIcon
                          className="main-color"
                          height={15}
                          width={15}
                        />
                      </button>
                      <input
                        type="number"
                        value={menu?.count || 0}
                        className="text-center"
                        placeholder="0"
                        readOnly={true}
                      />
                      <button
                        className="button-plus flex justify-center items-center"
                        type="button"
                        onClick={() => addProduct(menu?._id)}
                      >
                        <PlusIcon
                          className="main-color"
                          height={15}
                          width={15}
                        />
                      </button>
                    </div>
                  </WrapperMenu>
                </div>
              );
            })}
          </WrapperListMenu>
          <span className="mt-3 span-title">Notes</span>
          <textarea
            defaultValue={payload.notes}
            name="notes"
            rows={5}
            onChange={(e) => setPayload({ ...payload, notes: e.target.value })}
            placeholder="Input Notes"
          ></textarea>
          <div className="mt-6 flex flex-row gap-2 justify-center items-center">
            <Button
              color="outlineDanger"
              size="md"
              title="Cancel"
              rounded="sm"
              onClick={() => {
                close();
                reset();
              }}
              type="button"
            />
            <Button
              color="primary"
              size="md"
              title="Accept"
              rounded="sm"
              onClick={handleContinue}
              type="button"
            />
          </div>
        </WrapperBody>
      </Modal>
    </>
  );
};

export default memo(ModalCreate);
