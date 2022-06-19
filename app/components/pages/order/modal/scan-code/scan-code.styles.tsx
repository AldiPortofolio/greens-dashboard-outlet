import tw from 'tailwind-styled-components/dist/tailwind';
import styled from 'styled-components';
import { Dialog } from '@headlessui/react';

const WrapperTitleStyled = styled(Dialog.Title)`
  height: 84px;
  background-color: white;
  padding: 24px 16px 24px 25px;
  color: #6f8998;
`;

export const WrapperTitle = tw(WrapperTitleStyled)`
 text-white
 flex
 w-full
 items-center
 justify-end
`;

export const WrapperBody = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-full
  gap-5
  mb-14
`;

interface IWrapperIconStyledProps {
  typeModal: 'accept' | 'decline';
}

const WrapperIconStyled = styled.div<IWrapperIconStyledProps>`
  height: 64px;
  width: 64px;
  background: ${(props) =>
    props.typeModal === 'accept'
      ? 'rgba(160, 208, 137, 0.24)'
      : 'rgba(191, 0, 0, 0.24)'};
`;

export const WrapperIcon = tw(WrapperIconStyled)`
  flex
  justify-center
  items-center
  rounded-full
`;

const WrapperSubTitleStyled = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 16px;
  color: #6f8998;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
  }
`;

export const WrapperSubTitle = tw(WrapperSubTitleStyled)`
  flex
  flex-col
  justify-center
  items-center
  gap-5
`;

export const WrapperInput = tw.div`
  w-full
  px-10
`;

export const WrapperButton = tw.div`
  w-full
  flex
  justify-center
  items-center
  mt-6
`;
