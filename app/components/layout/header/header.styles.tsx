import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const WrapperHeaderStyled = styled.header`
  height: 93px;
`;

export const WrapperHeader = tw(WrapperHeaderStyled)` 
  top-0 
  bg-white
  w-full
  z-10
`;

export const WrapperFlex = tw.div`
  flex
  flex-row
  item-center
  w-full 
  h-full
`;

const DividerStyled = styled.div`
  border-color: #e3f1fe;
`;

export const Divider = tw(DividerStyled)`
  border-l-2
  my-5
`;

export const WrapperBetween = tw.div`
  flex 
  justify-between 
  items-center 
  w-full 
  px-12
`;
