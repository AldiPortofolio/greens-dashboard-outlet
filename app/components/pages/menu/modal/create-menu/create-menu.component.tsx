/* eslint-disable @next/next/no-img-element */
import Modal from '@/components/shared/modal/modal.component';
import {
  XIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon,
  PencilIcon,
} from '@heroicons/react/solid';
import React, { FC, useState } from 'react';
import {
  WrapperBody,
  WrapperButtonEdit,
  WrapperImage,
  WrapperTitle,
} from './create-menu.styles';
import Button from '@/components/shared/button/button.component';
import ModalAddIngredients from '../add-ingredients/add-ingredients.component';
import ModalConfirm from '@/components/shared/modal/modal-confirm.component';
import { getBase64 } from '@/app/utils/utils';

interface IModalProps {
  open: boolean;
  close: any;
  back: any;
}

interface IPayload {
  title: string;
  description: string;
  onSale: boolean;
  price: number;
  linkImage: string;
  nutrientList: [];
  productTypeList: [];
}

const ModalCreate: FC<IModalProps> = ({ open, close, back }) => {
  let inputRef: any;
  const [image, setImage] = useState<any>(null);
  const [openAddIngredients, setOpenAddIngredients] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [payload, setPayload] = useState<IPayload>({
    title: '',
    description: '',
    onSale: false,
    price: 0,
    linkImage: '',
    nutrientList: [],
    productTypeList: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const reset = () => {
    setPayload({
      title: '',
      description: '',
      onSale: false,
      price: 0,
      linkImage: '',
      nutrientList: [],
      productTypeList: [],
    });
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file: any = e.target.files && e.target.files[0];
    setImage(file);
    getBase64(file, (result: any) => {
      setPayload({ ...payload, linkImage: result });
    });
  };

  return (
    <>
      <ModalAddIngredients
        open={openAddIngredients}
        close={() => setOpenAddIngredients(false)}
        back={back}
        payload={payload}
        setPayload={setPayload}
        backToAddIngredients={() => setOpenAddIngredients(true)}
      />
      <ModalConfirm
        open={openConfirm}
        close={() => setOpenConfirm(false)}
        typeModal="success"
        icons="success"
        title="Order Created"
        description="The order is Successfully added to new order."
      />
      <Modal open={open} close={close} size="sm">
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
        <WrapperImage className="h-[185px] relative">
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="image-menu"
              className="h-full w-full"
            />
          )}
          <WrapperButtonEdit
            className="absolute h-[37px] w-[37px] flex flex-col justify-center items-center rounded-full bg-black -bottom-4 right-7 cursor-pointer"
            onClick={() => inputRef.click()}
          >
            <PencilIcon className="text-black" height={20} width={20} />
          </WrapperButtonEdit>
        </WrapperImage>
        <WrapperBody className="flex flex-col py-[16px] px-[30px] gap-3 mt-2">
          <input
            ref={(refParam) => (inputRef = refParam)}
            type="file"
            onChange={handleFileSelected}
            hidden={true}
          />
          <input
            type="text"
            value={payload.title}
            placeholder="Menu"
            name="title"
            onChange={handleChange}
          />
          <span className="span-title">Description</span>
          <textarea
            defaultValue={payload.description}
            name="description"
            rows={5}
            onChange={(e) =>
              setPayload({ ...payload, description: e.target.value })
            }
            placeholder="Input Notes"
          ></textarea>
          <input
            type="text"
            value={payload.price}
            placeholder="Price"
            name="price"
            onChange={handleChange}
          />
          <div className="mt-6 flex flex-row gap-2 justify-center items-center">
            <Button
              color="primary"
              size="md"
              title="Continue"
              rounded="sm"
              onClick={() => {
                close();
                setOpenAddIngredients(true);
              }}
              type="button"
              className="w-full"
            />
          </div>
        </WrapperBody>
      </Modal>
    </>
  );
};

export default ModalCreate;
