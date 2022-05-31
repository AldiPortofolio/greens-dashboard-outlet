import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { MAIN_COLOR } from '@/app/lib/constant.styles';

const ContainerStyled = styled.button`
  height: 48px;
`;

export const Container = tw(ContainerStyled)`
  flex 
  flex-row 
  w-full
  justify-center
  items-center
`;

interface IActiveMenuProps {
  active: boolean;
}

export const ActiveMenu = styled.div<IActiveMenuProps>`
  width: 8px;
  background-color: ${(props) => (props.active ? MAIN_COLOR : 'tranparent')};
  height: 100%;
`;

const WrapperStyled = styled.div<IActiveMenuProps>`
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => (props.active ? MAIN_COLOR : '#96b3c3')};
  }
`;

export const WrapperCenter = tw(WrapperStyled)`
  flex 
  flex-row 
  items-center 
  w-full 
  gap-3
  pl-14
`;
