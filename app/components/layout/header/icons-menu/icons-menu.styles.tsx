import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const WrapperIcons = tw.div`
  flex 
  flex-row 
  justify-center 
  items-center 
  gap-8
`;

const DropdownProfileStyled = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 40px;
  background-color: #6f8998;
  color: #ffffff;
`;

export const DropdownProfile = tw(DropdownProfileStyled)`
  rounded-full 
  h-8 
  w-8 
  flex 
  justify-center 
  items-center 
  cursor-pointer
`;
