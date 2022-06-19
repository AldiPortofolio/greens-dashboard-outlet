import tw from 'tailwind-styled-components';
import styled from 'styled-components';

interface IWrapperTableStyledInterface {
  type_table: 'table-fixed' | 'table-auto';
}

const WrapperTableStyled = styled.table<IWrapperTableStyledInterface>`
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
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
      transition: 0.3s;

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
  ${(props: IWrapperTableStyledInterface) =>
    props.type_table && props.type_table}
  text-left
`;
