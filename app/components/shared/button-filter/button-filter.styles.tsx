import tw from 'tailwind-styled-components';
import styled, { css } from 'styled-components';
import { MAIN_COLOR } from '@/app/lib/constant.styles';

interface IButtonProps {
  color: 'primary' | 'secondary' | 'outline_primary' | 'outline_secondary';
  type_btn: 'square' | 'rounded';
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
  outline_primary: css`
    border: 1px solid;
    border-color: ${MAIN_COLOR};
    background-color: transparent;
    color: ${MAIN_COLOR};
  `,
  outline_secondary: css`
    border: 1px solid;
    border-color: #96b3c3;
    background-color: transparent;
    color: #96b3c4;
  `,
};

const TabButtonStyled = styled.button<IButtonProps>`
  ${(props) => props.color && COLOR[props.color]}
  border-radius: ${(props) => (props.type_btn === 'square' ? '8px' : '18px')};
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
`;

export const TabButton = tw(TabButtonStyled)`
  flex
  flex-row
  justify-center
  items-center
  gap-1
`;
