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
  .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #96b3c3;
  }
`;

export const WrapperInput = styled.div`
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
`;

export const WrapperListBatch = styled.div`
  input {
    height: 40px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  label {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #6f8998;
  }
`;
