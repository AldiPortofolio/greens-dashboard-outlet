import tw from 'tailwind-styled-components';
import styled from 'styled-components';

interface ITextboxProps {
  borderFocusColor: 'primary' | 'danger';
}

export const WrapperTextbox = styled.input<ITextboxProps>`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 25px 8px 20px;
  height: 45px;
  width: 100%;

  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${(props) =>
    props.borderFocusColor === 'primary' ? '#5EA73C' : '#6f8998'};
  cursor: #6f8998, auto;

  :focus {
    outline: none;
    border: 1px solid
      ${(props) =>
        props.borderFocusColor === 'primary' ? '#5ea73c' : '#BF0000'};
  }

  ::placeholder {
    color: #6f8998;
  }
`;
