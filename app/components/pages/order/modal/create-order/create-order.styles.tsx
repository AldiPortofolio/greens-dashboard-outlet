import styled from 'styled-components';
import { Dialog } from '@headlessui/react';
import { MAIN_COLOR } from '@/app/lib/constant.styles';

export const WrapperTitle = styled(Dialog.Title)`
  height: 84px;
  background-color: ${MAIN_COLOR};
  padding: 24px 16px 24px 25px;
  color: white;
  display: flex;
  width: 100%;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const WrapperBody = styled.form`
  input {
    height: 40px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 25px;

    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #6f8998;
  }

  textarea {
    padding: 8px 25px 8px 8px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #6f8998;
  }

  .span-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #96b3c4;
  }
`;

export const WrapperListMenu = styled.div`
  height: 181px;
  gap: 16px;
`;

export const WrapperMenu = styled.div`
  span {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #6f8998;
  }

  input {
    width: 48px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0px;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .button-minus {
    width: 32px;
    height: 32px;
    border: 1px solid #e2e8f0;
    border-radius: 8px 0px 0px 8px;
  }

  .button-plus {
    width: 32px;
    height: 32px;
    border: 1px solid #e2e8f0;
    border-radius: 0px 8px 8px 0px;
  }
`;
