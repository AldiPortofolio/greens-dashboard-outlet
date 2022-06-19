/* eslint-disable @next/next/no-img-element */
import Modal from '@/components/shared/modal/modal.component';
import { FC, useState } from 'react';
import { WrapperBody, WrapperFooter, WrapperTitle } from './edit-batch.styles';
import { XIcon } from '@heroicons/react/outline';
import Table from '@/components/shared/table/table.component';
import Button from '@/components/shared/button/button.component';
import BarcodeSVG from '@/app/assets/barcode.svg';
import ModalAddBatch from '../add-batch/add-batch.component';
import { useAppSelector } from '@/app/store/hooks';

interface IModalInterface {
  open: boolean;
  close: any;
  save: any;
  back: any;
  id: string;
}

const DetailOrder: FC<IModalInterface> = ({ open, close, save, back, id }) => {
  const [openModalAddBatch, setOpenModalAddBatch] = useState(false);
  const datas: any = useAppSelector((state) => state.createOrder.listBatches);
  const product = datas?.items?.find((data: any) => data._id == id);
  const [type, setType] = useState<any>({});

  return (
    <>
      <ModalAddBatch
        open={openModalAddBatch}
        close={() => setOpenModalAddBatch(false)}
        back={back}
        data={type}
      />

      <Modal open={open} close={close} size="3xl">
        <WrapperTitle>
          <div className="flex flex-col items-start w-full">
            <div className="flex justify-between w-full">
              <p>{product?.title}</p>
              <XIcon
                height={20}
                width={20}
                className="cursor-pointer"
                onClick={close}
              />
            </div>
          </div>
        </WrapperTitle>
        <WrapperBody>
          <Table type="table-fixed">
            <thead>
              <tr>
                <th className=""></th>
                <th className="w-[35%]">Ingredients</th>
                <th className="w-[35%]">Batch</th>
                <th className="w-[15%]">Qt</th>
                <th className="w-[15%]"></th>
              </tr>
            </thead>
            <tbody>
              {product?.productTypeList?.map((types: any, index: number) => (
                <tr key={types._id}>
                  <td></td>
                  <td>
                    <p>{types._id}</p>
                  </td>
                  <td>
                    {types.batches?.map((batch: any) => (
                      <div
                        key={batch.codeBatch}
                        className="flex flex-row gap-1 main-color items-center"
                      >
                        <p>{batch.codeBatch}</p>
                        <XIcon
                          height={15}
                          width={15}
                          className="text-red-500 cursor-pointer"
                        />
                      </div>
                    ))}
                    <Button
                      color="primary"
                      size="sm"
                      title="Add Batch"
                      rounded="sm"
                      onClick={() => {
                        close();
                        setOpenModalAddBatch(true);
                        setType(types);
                      }}
                      type="button"
                      className="mt-2"
                    />
                  </td>
                  <td>
                    {types.batches?.map((batch: any) => (
                      <div
                        key={batch.codeBatch}
                        className="flex flex-row gap-1 main-color items-center"
                      >
                        <p>x{batch.qty}</p>
                      </div>
                    ))}
                  </td>
                  <td>
                    <img
                      src={BarcodeSVG}
                      alt="icon"
                      height={25}
                      width={25}
                      className=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </WrapperBody>
        <WrapperFooter>
          <Button
            color="outlinePrimary"
            size="md"
            title="Back"
            rounded="sm"
            onClick={() => {
              close();
              save();
            }}
            type="button"
          />
          <Button
            color="primary"
            size="md"
            title="Save"
            rounded="sm"
            onClick={() => {
              close();
              save();
            }}
            type="button"
          />
        </WrapperFooter>
      </Modal>
    </>
  );
};

export default DetailOrder;
