import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const WrapperAsideStyled = styled.aside`
  min-width: 265px;
  width: 265px;
`;

export const WrapperAside = tw(WrapperAsideStyled)`
  sidebar
  bg-transparent 
  absolute 
  inset-y-0 
  left-0 
  transform 
  -translate-x-full 
  md:relative 
  md:translate-x-0 
  transition 
  duration-200 
  ease-in-out
`;

export const WrapperFlex = tw.div`
  flex 
  flex-col 
  items-center
  w-full 
  gap-3
`;
