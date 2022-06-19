import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const WrapperTextarea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 25px 8px 8px;
  height: 125px;
  width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: #6f8998;

  :focus {
    outline: none;
    border: 1px solid #5ea73c;
  }
`;
