import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const WrapperTableStyled = styled.table`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #6f8998;
  border-collapse: separate;
  border-spacing: 0 1em;

  thead {
    color: #96b3c3;
  }

  tbody {
    tr {
      background-color: white;
      border-radius: 8px !important;

      td {
        padding: 16px 5px;
        vertical-align: top;
      }

      td:first-child {
        text-align: center;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        width: 4rem;
      }

      td:last-child {
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
      }

      p {
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;

        span {
          color: #5ea73c;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
`;
export const WrapperTable = tw(WrapperTableStyled)`
  table-fixed
  text-left
`;
