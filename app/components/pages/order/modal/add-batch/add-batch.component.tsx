import Modal from '@/components/shared/modal/modal.component';
import { XIcon } from '@heroicons/react/solid';
import React, { FC, useEffect, useState, memo } from 'react';
import {
  WrapperBody,
  WrapperInput,
  WrapperListBatch,
  WrapperTitle,
} from './add-batch.styles';
import Button from '@/components/shared/button/button.component';
import { useGeProductsQuery } from '@/app/store/product/product.slice';
import AutoComplete from '@/components/shared/dropdown/autocomplete.component';
import { setUpdateDataBatches } from '@/app/store/order/create-order.slice';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import produce from 'immer';

interface IModalProps {
  open: boolean;
  close: any;
  back: any;
  data: any;
}

const ModalCreate: FC<IModalProps> = ({ open, close, back, data }) => {
  const dispatch = useAppDispatch();
  const { data: products, isSuccess } = useGeProductsQuery(
    `?productType=${data?._id || ''}`
  );
  const batches: any = useAppSelector((state) => state.createOrder.listBatches);

  const [optionProducts, setOptionProducts] = useState([]);
  const [selected, setSelected] = useState<any>(null);
  const [listSeleceted, setListSelected] = useState([]);

  const handleAdd = () => {
    let newList: any = [...listSeleceted];
    const obj = { codeBatch: selected.value, qty: 0 };
    newList.push(obj);
    setListSelected(newList);
  };

  const handleChangeQty = (value: string, code: string) => {
    const nextState = produce(listSeleceted, (draftState: any) => {
      const todo = draftState.find((obj: any) => obj.codeBatch === code);
      todo.qty = value;
    });

    setListSelected(nextState);
  };

  const handleSave = () => {
    let nextState: any = null;
    if (batches?.items.length > 0) {
      const nextItems = produce(batches?.items, (draftState: any) => {
        batches.items?.map((_key: any, idx: number) => {
          const item = produce(
            batches.items[idx].productTypeList,
            (draftStateType: any) => {
              batches.items[idx].productTypeList.map(
                (type: any, subIdx: number) => {
                  if (data._id === type._id) {
                    let newList: any = [];
                    listSeleceted.map((obj: any) => {
                      newList.push({ codeBatch: obj.codeBatch, qty: obj.qty });
                    });
                    return (draftStateType[subIdx]['batches'] = newList);
                  }
                }
              );
            }
          );
          return (draftState[idx]['productTypeList'] = item);
        });
      });
      nextState = produce(batches, (draftState: any) => {
        draftState.items = nextItems;
      });
      dispatch(setUpdateDataBatches(nextState));
    }
    close();
    back();
    setSelected(null);
  };

  useEffect(() => {
    if (isSuccess) {
      const { ids, entities }: any = products;
      let option: any = [];
      ids.map((id: string) => {
        option.push({
          id: id,
          value: entities[id].codeBatch,
          label: `${entities[id].codeBatch} - ${entities[id].productName}`,
        });
      });
      setOptionProducts(option);
    }
  }, [isSuccess, products]);

  useEffect(() => {
    if (data.batches) {
      setListSelected(data.batches);
    }
  }, [data]);

  return (
    <Modal open={open} close={close} size="lg">
      <WrapperTitle>
        <div className="flex flex-col items-start w-full">
          <div className="flex justify-between w-full">
            <span>{data?.label}</span>
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
          <span className="title">Choose Batch</span>
          <div className="flex flex-row gap-2 w-100">
            <AutoComplete
              options={optionProducts}
              selected={selected}
              onChange={(val: any) => setSelected(val)}
            />
            <Button
              color="primary"
              size="sm"
              rounded="sm"
              title="Add"
              className="w-[20%]"
              onClick={handleAdd}
              type="button"
            />
          </div>
        </WrapperInput>
        <div className="flex flex-row">
          <span className="title mt-4 mb-2 w-full">Batches</span>
          <span className="title mt-4 mb-2 w-[20%]">Qty</span>
        </div>

        <WrapperListBatch className="flex flex-col w-100 gap-2">
          {listSeleceted?.map((batch: any, index: number) => (
            <div key={index} className="flex flex-row gap-2 w-100 items-center">
              <label className="w-full">{batch.codeBatch}</label>
              <input
                type="number"
                value={batch.qty}
                onChange={(e) =>
                  handleChangeQty(e.target.value, batch.codeBatch)
                }
                className="text-center w-[20%]"
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
            title="Save"
            rounded="sm"
            onClick={handleSave}
            type="button"
          />
        </div>
      </WrapperBody>
    </Modal>
  );
};

export default memo(ModalCreate);
