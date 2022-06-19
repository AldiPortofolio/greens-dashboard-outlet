import styled from 'styled-components';

export const WrapperList = styled.div`
  grid-area: main;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(192px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;
