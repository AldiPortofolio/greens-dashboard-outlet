import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { Dialog } from '@headlessui/react';
import { MAIN_COLOR } from '@/app/lib/constant.styles';

const WrapperTitleStyled = styled(Dialog.Title)`
  height: 84px;
  background-color: ${MAIN_COLOR};
  padding: 24px 16px 24px 25px;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const WrapperTitle = tw(WrapperTitleStyled)`
 text-white
 flex
 w-full
 items-center
`;

const WrapperBodyStyled = styled.div``;

export const WrapperBody = tw(WrapperBodyStyled)`
  px-6
  py-3
`;

export const WrapperFooter = tw.div`
  my-10
  flex
  flex-row
  gap-2
  justify-center
  items-center
`;
