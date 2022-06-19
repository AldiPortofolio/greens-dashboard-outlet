import styled from 'styled-components';
import { Dialog } from '@headlessui/react';
import { MAIN_COLOR } from '@/app/lib/constant.styles';

export const WrapperTitle = styled(Dialog.Title)`
  height: 84px;
  background-color: white;
  padding: 24px 16px 24px 25px;
  color: white;
  display: flex;
  width: 100%;
  align-items: center;

  span {
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    color: #6f8998;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #6f8998;
  }
`;

export const WrapperImage = styled.div`
  width: 55px;
  height: 55px;
`;

export const WrapperBody = styled.div`
  .description {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #6f8998;
  }
`;
