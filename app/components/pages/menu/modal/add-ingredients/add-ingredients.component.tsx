import Modal from '@/components/shared/modal/modal.component';
import { XIcon } from '@heroicons/react/solid';
import React, { FC, useState, useEffect } from 'react';
import {
  WrapperBody,
  WrapperInput,
  WrapperTitle,
} from './add-ingredients.styles';
import Button from '@/components/shared/button/button.component';
import Table from '@/components/shared/table/table.component';
import ModalAddNutrients from '../add-nutrients/add-nutrients.component';
import { useGeProductsQuery } from '@/app/store/product/product.slice';
import AutoComplete from '@/components/shared/dropdown/autocomplete.component';

interface IModalProps {
  open: boolean;
  close: any;
  back: any;
  backToAddIngredients: any;
  payload: any;
  setPayload: any;
}

const ModalCreate: FC<IModalProps> = ({
  open,
  close,
  back,
  backToAddIngredients,
  payload,
  setPayload,
}) => {
  const { data: products, isSuccess } = useGeProductsQuery('');
  const [openAddNutrient, setOpenAddNutrient] = useState<boolean>(false);
  const [optionProducts, setOptionProducts] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  const handleAdd = () => {
    const ingredient = { _id: selected.id, label: selected.label };
    const productTypeList = [...payload.productTypeList, ingredient];
    setPayload({ ...payload, productTypeList });
    setSelected(null);
  };

  useEffect(() => {
    if (isSuccess) {
      const { ids, entities }: any = products;
      let option: any[] = [];
      ids.map((id: string) => {
        if (!option.some((person) => person.id === entities[id].productType)) {
          option.push({
            id: entities[id].productType,
            value: entities[id].productType,
            label: entities[id].productName,
          });
        }
      });
      setOptionProducts(option);
    }
  }, [isSuccess, products]);
  return (
    <>
      <ModalAddNutrients
        open={openAddNutrient}
        close={() => setOpenAddNutrient(false)}
        back={backToAddIngredients}
        backtoAddNutrients={() => setOpenAddNutrient(true)}
        payload={payload}
        setPayload={setPayload}
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
                type="button"
                onClick={handleAdd}
              />
            </div>
          </WrapperInput>
          <Table type="table-fixed">
            <thead>
              <tr>
                <th className=""></th>
                <th className="w-3/4">Ingredients</th>
                <th className="w-1/4"></th>
              </tr>
            </thead>
            <tbody>
              {payload.productTypeList &&
                payload.productTypeList.map((type: any) => (
                  <tr key={type._id}>
                    <td></td>
                    <td>
                      <p>{type.label}</p>
                    </td>
                    <td>
                      <p className="text-center">Available</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
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
                setOpenAddNutrient(true);
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
