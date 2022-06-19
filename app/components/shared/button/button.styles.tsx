import styled, { css } from 'styled-components';
import { ICOLOR_BUTTON, MAIN_COLOR } from '@/app/lib/constant.styles';

interface IButtonProps extends ICOLOR_BUTTON {
  rounded: 'sm' | 'md' | 'full';
  size: 'sm' | 'md' | 'lg';
}

const COLOR = {
  primary: css`
    outline-color: ${MAIN_COLOR};
    background-color: ${MAIN_COLOR};
    color: white;
  `,
  secondary: css`
    outline-color: #96b3c4;
    background-color: #96b3c4;
    color: white;
  `,
  danger: css`
    outline-color: #bf0000;
    background-color: #bf0000;
    color: white;
  `,
  outlinePrimary: css`
    border: 1px solid;
    border-color: ${MAIN_COLOR};
    background-color: transparent;
    color: ${MAIN_COLOR};
  `,
  outlineSecondary: css`
    border: 1px solid;
    border-color: #96b3c3;
    background-color: transparent;
    color: #96b3c4;
  `,
  outlineDanger: css`
    border: 1px solid;
    border-color: #bf0000;
    background-color: transparent;
    color: #bf0000;
  `,
};

const SIZE = {
  sm: css`
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  `,
  md: css`
    padding: 15px 60px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  `,
  lg: css`
    padding: 32px 8px;
  `,
};

const ROUNDED = {
  sm: css`
    border-radius: 8px;
  `,
  md: css`
    border-radius: 18px;
  `,
  full: css`
    border-radius: 100%;
  `,
};

export const WrapperButton = styled.button<IButtonProps>`
  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.size && SIZE[props.size]}
  ${(props) => props.rounded && ROUNDED[props.rounded]}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5;

  :disabled {
    background-color: ${(props) =>
      props.color === 'primary'
        ? 'rgba(94, 167, 60, 0.5)'
        : 'rgba(191, 0, 0, 0.5)'} !important;
  }
`;
