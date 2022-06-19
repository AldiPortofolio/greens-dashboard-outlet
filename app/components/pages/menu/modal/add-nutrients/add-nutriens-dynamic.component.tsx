import Modal from '@/components/shared/modal/modal.component';
import { XIcon } from '@heroicons/react/solid';
import React, { FC, useState } from 'react';
import {
  WrapperBody,
  WrapperInput,
  WrapperListBatch,
  WrapperTitle,
} from './add-nutrients.styles';
import Button from '@/components/shared/button/button.component';
import ModalConfirmAction from '@/components/shared/modal/modal-confirm-wiith-action.component';
import ModalConfirm from '@/components/shared/modal/modal-confirm.component';
import MenuSVG from '@/app/assets/menu-active.svg';
import produce from 'immer';
import { useCreateMenuMutation } from '@/app/store/menu/menu.slice';

interface IModalProps {
  open: boolean;
  close: any;
  back: any;
  backToAddNutrients: any;
  payload: any;
  setPayload: any;
}

const ModalCreate: FC<IModalProps> = ({
  open,
  close,
  back,
  backToAddNutrients,
  payload,
}) => {
  const [openConfirmAction, setOpenConfirmAction] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [nutrient, setNutrient] = useState('');
  const [listSeleceted, setListSelected] = useState([]);
  const [createMenu, { isLoading, isSuccess, isError, error }] =
    useCreateMenuMutation();
  const [modalData, setModaldata] = useState<{
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

  const handleAdd = () => {
    const obj = { label: nutrient, value: 0 };
    const newList: any = [...listSeleceted, obj];
    setListSelected(newList);
    setNutrient('');
  };

  const handleChangeQty = (value: string, label: string) => {
    const nextState = produce(listSeleceted, (draftState: any) => {
      const todo = draftState.find((obj: any) => obj.label === label);
      todo.value = value;
    });
    setListSelected(nextState);
  };

  const handleSubmit = async () => {
    const nutrientList = [...payload.nutrientList, ...listSeleceted];
    const body = { ...payload, nutrientList };

    try {
      await createMenu(body).unwrap();
      if (isSuccess) {
        setModaldata({
          title: 'Menu Created',
          description: 'You’ve succesfully create this menu.',
          icons: 'success',
          typeModal: 'success',
        });
      }

      if (isError) {
        setModaldata({
          title: 'Errors',
          description: '',
          icons: 'error',
          typeModal: 'error',
        });
      }
    } catch (err: any) {
      setModaldata({
        title: 'Failed',
        description: err.data.message,
        icons: 'error',
        typeModal: 'error',
      });
    }
    setOpenConfirmAction(false);
    setOpenConfirm(true);
  };

  return (
    <>
      <ModalConfirmAction
        open={openConfirmAction}
        close={() => setOpenConfirmAction(false)}
        title="Create Menu"
        description="Are you sure you want to create this menu?"
        isBack={true}
        type="success"
        handleCancel={() => {
          backToAddNutrients();
          setOpenConfirmAction(false);
        }}
        handleSubmit={handleSubmit}
        icon={MenuSVG}
        loading={isLoading}
      />
      <ModalConfirm
        open={openConfirm}
        close={() => setOpenConfirm(false)}
        title={modalData.title}
        description={modalData.description}
        icons={modalData.icons}
        typeModal={modalData.typeModal}
      />
      <Modal open={open} close={close} size="md">
        <WrapperTitle>
          <div className="flex flex-col items-start w-full">
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <p>Create</p>
                <span>New Menu </span>
              </div>
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
          <WrapperInput className="flex flex-col w-100 gap-2">
            <span className="title">Input New Nutrients</span>
            <div className="flex flex-row gap-2 w-100">
              <input
                type="text"
                value={nutrient}
                placeholder="Input Nutrients"
                name="batch"
                onChange={(e) => setNutrient(e.target.value)}
                className="w-full"
              />
              <Button
                color="primary"
                size="sm"
                rounded="sm"
                title="Add"
                className="w-[20%]"
                type="button"
                onClick={handleAdd}
              />
            </div>
          </WrapperInput>
          <div className="flex flex-row mt-7">
            <span className="title mb-2 w-[50%]">Nutrients Detail</span>
            <span className="title mb-2 w-[50%]"></span>
          </div>
          <WrapperListBatch className="flex flex-col w-100 gap-2">
            {listSeleceted &&
              listSeleceted.map((nutrisi: any) => (
                <div
                  key={nutrisi.label}
                  className="flex flex-row gap-2 w-100 items-center"
                >
                  <label className="w-[75%]">{nutrisi.label}</label>
                  <input
                    type="number"
                    value={nutrisi.value}
                    onChange={(e) =>
                      handleChangeQty(e.target.value, nutrisi.label)
                    }
                    className=" w-[25%]"
                    placeholder="0000"
                  />
                </div>
              ))}
          </WrapperListBatch>
          <div className="mt-10 flex flex-row gap-2 justify-center items-center">
            <Button
              color="outlinePrimary"
              size="md"
              title="Back"
              rounded="sm"
              onClick={() => {
                close();
                back();
              }}
              type="button"
            />
            <Button
              color="primary"
              size="md"
              title="Continue"
              rounded="sm"
              onClick={() => {
                close();
                setOpenConfirmAction(true);
              }}
              type="button"
            />
          </div>
        </WrapperBody>
      </Modal>
    </>
  );
};

export default ModalCreate;
