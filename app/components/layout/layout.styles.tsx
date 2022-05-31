import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const WrapperFlexCol = tw.div`
  flex 
  flex-col
`;

export const WrapperMenuAndContent = tw.div`
  relative 
  h-screen 
  overflow-hidden 
  md:flex
  py-6
`;

export const WrapperBody = tw.div`
  flex 
  relative
  my-8
`;

const DividerStyled = styled.div`
  border-color: #e3f1fe;
  min-height: 80% !important;
`;

export const Divider = tw(DividerStyled)`
  border-l-2
`;
