import styled from 'styled-components';

interface IWrapperCard {
  typeCard: 'on' | 'off';
}

export const WrapperCard = styled.div<IWrapperCard>`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  border: 3px solid
    ${(props) => (props.typeCard === 'on' ? '#5ea73c' : '#96B3C4')};
  border-radius: 8px;

  .title {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #6f8998;
  }

  .price {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #6f8998;
  }

  label {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
`;
