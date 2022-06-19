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
import ModalNutrientsDetail from './add-nutriens-dynamic.component';

interface IModalProps {
  open: boolean;
  close: any;
  back: any;
  backtoAddNutrients: any;
  payload: any;
  setPayload: any;
}

const ModalCreate: FC<IModalProps> = ({
  open,
  close,
  back,
  backtoAddNutrients,
  payload,
  setPayload,
}) => {
  const [openNutrientsDetail, setOpenNutrientsDetail] =
    useState<boolean>(false);

  const [nutrients, setNutrients] = useState<any>({
    totalCal: { value: 0, label: '' },
    energyCal: { value: 0, label: '' },
    proteinCal: { value: 0, label: '' },
    netCarbs: { value: 0, label: '' },
    fat: { value: 0, label: '' },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    setNutrients({
      ...nutrients,
      [e.target.name]: { value: e.target.value, label },
    });
  };

  const handleContinue = () => {
    const newList = [
      { label: nutrients.totalCal.label, value: nutrients.totalCal.value },
      { label: nutrients.energyCal.label, value: nutrients.energyCal.value },
      { label: nutrients.proteinCal.label, value: nutrients.proteinCal.value },
      { label: nutrients.netCarbs.label, value: nutrients.netCarbs.value },
      { label: nutrients.fat.label, value: nutrients.fat.value },
    ];
    const nutrientList = [...payload.nutrientList, ...newList];
    setPayload({ ...payload, nutrientList });
    close();
    setOpenNutrientsDetail(true);
  };

  return (
    <>
      <ModalNutrientsDetail
        open={openNutrientsDetail}
        close={() => setOpenNutrientsDetail(false)}
        back={backtoAddNutrients}
        backToAddNutrients={() => setOpenNutrientsDetail(true)}
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
          <div className="flex flex-row">
            <span className="title mb-2 w-[50%]">Nutrients</span>
            <span className="title mb-2 w-[50%]"></span>
          </div>
          <WrapperListBatch className="flex flex-col w-100 gap-2">
            <div className="flex flex-row gap-2 w-100 items-center">
              <label className="w-[50%]">Total Calories (Kcal)</label>
              <input
                type="number"
                value={nutrients.totalCal.value}
                name="totalCal"
                onChange={(e) => handleChange(e, 'Total Calories (Kcal)')}
                className=" w-[50%]"
                placeholder="0000"
              />
            </div>
            <div className="flex flex-row gap-2 w-100 items-center">
              <label className="w-[50%]">Energy (Kcal)</label>
              <input
                type="number"
                value={nutrients.energyCal.value}
                name="energyCal"
                onChange={(e) => handleChange(e, 'Energy (Kcal)')}
                className=" w-[50%]"
                placeholder="0000"
              />
            </div>
            <div className="flex flex-row gap-2 w-100 items-center">
              <label className="w-[50%]">Protein (g)</label>
              <input
                type="number"
                value={nutrients.proteinCal.value}
                name="proteinCal"
                onChange={(e) => handleChange(e, 'Protein (g)')}
                className=" w-[50%]"
                placeholder="0000"
              />
            </div>
            <div className="flex flex-row gap-2 w-100 items-center">
              <label className="w-[50%]">Net Carbs (g)</label>
              <input
                type="number"
                value={nutrients.netCarbs.value}
                name="netCarbs"
                onChange={(e) => handleChange(e, 'Net Carbs (g)')}
                className=" w-[50%]"
                placeholder="0000"
              />
            </div>
            <div className="flex flex-row gap-2 w-100 items-center">
              <label className="w-[50%]">Fat (g)</label>
              <input
                type="number"
                value={nutrients.fat.value}
                name="fat"
                onChange={(e) => handleChange(e, 'Fat (g)')}
                className=" w-[50%]"
                placeholder="0000"
              />
            </div>
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
              onClick={handleContinue}
              type="button"
            />
          </div>
        </WrapperBody>
      </Modal>
    </>
  );
};

export default ModalCreate;
