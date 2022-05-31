import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const WrapperBrandStyled = styled.div`
  min-width: 265px;
  width: 265px;
`;

export const WrapperBrand = tw(WrapperBrandStyled)`
  flex 
  justify-center 
  items-center 
  h-full
  w-full
  pr-10
`;
