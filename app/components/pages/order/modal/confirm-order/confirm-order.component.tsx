import Modal from '@/components/shared/modal/modal.component';
import { XIcon, CheckIcon, PlusIcon, MinusIcon } from '@heroicons/react/solid';
import React, { FC, useState } from 'react';
import {
  WrapperBody,
  WrapperListMenu,
  WrapperMenu,
  WrapperTitle,
} from './confirm-order.styles';
import Button from '@/components/shared/button/button.component';

interface IModalProps {
  open: boolean;
  close: any;
  back: any;
  submit: any;
  data: IPayload;
  loading: boolean;
}

interface IPayload {
  name: string;
  phoneNum: string;
  address: string;
  notes: string;
  invoiceId: string;
  items: [];
}

const ModalCreate: FC<IModalProps> = ({
  open,
  close,
  back,
  submit,
  data,
  loading,
}) => {
  return (
    <Modal open={open} close={close}>
      <WrapperTitle>
        <div className="flex flex-col items-start w-full">
          <div className="flex justify-between w-full">
            <span>Confirm Order</span>
            <XIcon
              height={20}
              width={20}
              className="cursor-pointer"
              onClick={close}
            />
          </div>
        </div>
      </WrapperTitle>
      <WrapperBody className="flex flex-col py-[16px] px-[30px] ">
        <span className="customer-name">{data.name}</span>
        <span className="customer-number">{data.phoneNum}</span>
        <span className="customer-name mt-5 mb-2">Order</span>
        {data.items?.map((item: any, index) => (
          <span key={index} className="order-list py-1">
            {item?.title}
            <span className="value-green">&nbsp;x{item?.count}</span>
          </span>
        ))}

        <span className="customer-name mt-5 mb-2">Notes</span>
        <span className="order-list py-2">{data.notes}</span>
        <div className="mt-14 flex flex-row gap-2 justify-center items-center">
          <Button
            color="outlinePrimary"
            size="md"
            title="Back"
            rounded="sm"
            onClick={() => {
              back();
              close();
            }}
            type="button"
          />
          <Button
            color="primary"
            size="md"
            title="Confirm"
            rounded="sm"
            disabled={loading}
            isLoading={loading}
            onClick={submit}
            type="button"
          />
        </div>
      </WrapperBody>
    </Modal>
  );
};

export default ModalCreate;
