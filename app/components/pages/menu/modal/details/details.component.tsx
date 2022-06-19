/* eslint-disable @next/next/no-img-element */
import Modal from '@/components/shared/modal/modal.component';
import { XIcon } from '@heroicons/react/solid';
import React, { FC, useState } from 'react';
import { WrapperBody, WrapperImage, WrapperTitle } from './details.styles';
import Button from '@/components/shared/button/button.component';
import Table from '@/components/shared/table/table.component';
import ModalConfirmAction from '@/components/shared/modal/modal-confirm-wiith-action.component';
import ModalDelete from '../delete/delete.component';
import ModalConfirm from '@/components/shared/modal/modal-confirm.component';
import MenuDanger from '@/app/assets/menu-danger.svg';
import MenuActive from '@/app/assets/menu-active.svg';
import { useAppSelector } from '@/app/store/hooks';
import { RootState } from '@/app/store/store';
import { selectMenuById } from '@/app/store/menu/menu.slice';

interface IModalProps {
  open: boolean;
  close: any;
  type: 'on' | 'off';
  back: any;
  id: string;
}

const ModalDetail: FC<IModalProps> = ({ open, close, type, back, id }) => {
  const menu = useAppSelector((state: RootState) => selectMenuById(state, id));
  const [openConfirmActive, setOpenConfirmActive] = useState<boolean>(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [openConfirm2, setOpenConfirm2] = useState<boolean>(false);

  return (
    <>
      <ModalConfirmAction
        open={openConfirmActive}
        close={() => setOpenConfirmActive(false)}
        title={type === 'on' ? 'Deactivate Menu' : 'Activate Menu'}
        description={
          type === 'on'
            ? 'Are you sure you want to deactivate this menu?'
            : 'Are you sure you want to activate this menu?'
        }
        isBack={true}
        icon={type === 'on' ? MenuDanger : MenuActive}
        type={type === 'on' ? 'error' : 'success'}
        handleCancel={() => setOpenConfirmActive(false)}
        handleSubmit={() => {
          setOpenConfirmActive(false);
          setOpenConfirm(true);
        }}
      />
      <ModalDelete
        open={openConfirmDelete}
        close={() => setOpenConfirmDelete(false)}
        handleSubmit={() => {
          setOpenConfirmDelete(false);
          setOpenConfirm2(true);
        }}
        back={back}
      />
      <ModalConfirm
        open={openConfirm}
        close={() => setOpenConfirm(false)}
        title={type === 'on' ? 'Menu Deactivated' : 'Menu Activated'}
        description={
          type === 'on'
            ? 'This menu now is not available.'
            : 'This menu is now available.'
        }
        typeModal={type === 'on' ? 'error' : 'success'}
        icons="success"
      />
      <ModalConfirm
        open={openConfirm2}
        close={() => setOpenConfirm2(false)}
        title="Menu Deleted"
        description="This menu now is not available."
        typeModal="error"
        icons="success"
      />
      <Modal open={open} close={close} size="4xl">
        <WrapperTitle>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-row justify-between items-center gap-3">
              <WrapperImage className="rounded-full bg-black flex justify-center items-center">
                <img
                 
                 
                 
               
                  src={menu?.linkImage}
                  alt="img"
                  className="object-fill rounded-full"
                />
              </WrapperImage>
              <div className="flex flex-col justify-center gap-2">
                <span>{menu?.title || '-'}</span>
                <p>Rp{menu?.price || '-'}</p>
              </div>
            </div>
            <XIcon
              height={20}
              width={20}
              className="cursor-pointer main-color"
              onClick={close}
            />
          </div>
        </WrapperTitle>
        <hr className="text-gray-300 mx-[20px]" />
        <WrapperBody className="flex flex-col w-full px-[20px] py-3">
          <span className="description">{menu?.description || '-'}</span>
          <div className="flex flex-row mt-8 gap-5">
            <div className="flex flex-col w-[50%]">
              <Table type="table-fixed">
                <thead>
                  <tr>
                    <th className=""></th>
                    <th className="w-3/4">Ingredients</th>
                    <th className="w-1/4">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <p>microGREENS Red Veined Sorrel</p>
                    </td>
                    <td>
                      <p className="">Available</p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <p>microGREENS Red Veined Sorrel</p>
                    </td>
                    <td>
                      <p className="">Available</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="flex flex-col w-[50%]">
              <Table type="table-fixed">
                <thead>
                  <tr>
                    <th className=""></th>
                    <th className="w-[75%]">Nutritions Facts</th>
                    <th className="w-[25%]"></th>
                  </tr>
                </thead>
                <tbody>
                  {menu?.nutrientList?.map((nutrient: any, index: number) => (
                    <tr key={index}>
                      <td></td>
                      <td>
                        <p>{nutrient?.label}</p>
                      </td>
                      <td>
                        <p>{nutrient?.value}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center h-[108px] gap-3 w-full mt-3">
            <Button
              color="outlinePrimary"
              rounded="sm"
              title="Edit Menu"
              size="md"
            />
            <Button
              color={type === 'on' ? 'outlineDanger' : 'outlinePrimary'}
              rounded="sm"
              title={type === 'on' ? 'Deactivate Menu' : 'Activate Menu'}
              size="md"
              type="button"
              onClick={() => {
                close();
                setOpenConfirmActive(true);
              }}
            />
            <Button
              color="outlineDanger"
              rounded="sm"
              title="Delete"
              size="md"
              type="button"
              onClick={() => {
                setOpenConfirmDelete(true);
                close();
              }}
            />
          </div>
        </WrapperBody>
        <button className="overflow-hidden"></button>
      </Modal>
    </>
  );
};

export default ModalDetail;
