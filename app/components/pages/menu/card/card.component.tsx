/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import CompletedSVG from '@/app/assets/completed.svg';
import { WrapperCard } from './card.styles';

interface ICardProps {
  menu: any;
  type: 'on' | 'off';
  openDetails: any;
}

const Card: FC<ICardProps> = ({ type, openDetails, menu }) => {
  return (
    <WrapperCard typeCard={type}>
      <div className="w-full relative">
        {type === 'off' && (
          <div className="absolute inset-0 bg-white bg-opacity-60" />
        )}
        <div className="h-[117px] w-full rounded-t-lg">
          <img
            src={menu?.linkImage}
            alt="img"
            className="w-full rounded-t-md h-[117px]"
          />
        </div>
        <div className="px-[16px] pt-[16px] flex flex-col gap-3">
          <span className="title">{menu?.title || '-'}</span>
          <span className="price">Rp{menu?.price || '0'}</span>
          <div className="flex justify-between items-center">
            <span className="price">Ingredients</span>
            <img src={CompletedSVG} alt="icon" height={15} width={15} />
          </div>
        </div>
      </div>
      <div className="pb-[16px] pt-3 flex flex-col gap-3 w-full">
        <div className="flex flex-row justify-center items-center">
          <label
            className="main-color underline cursor-pointer"
            onClick={openDetails}
          >
            See Details
          </label>
        </div>
      </div>
    </WrapperCard>
  );
};

export default Card;
