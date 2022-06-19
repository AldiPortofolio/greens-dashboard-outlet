import styled from 'styled-components';

export const WrapperLogin = styled.div`
  background-color: #f8fafc;
  border-radius: 20px;
  width: 401px;

  @media (max-width: 500px) {
    width: 100%;
  }

  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #64748b;
  }

  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  }

  .forgot {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #5ea73c;
  }

  .error {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #e94141;
  }

  button {
    background: #5ea73c;
    border-radius: 8px;
    color: white;
    padding: 8px 25px 8px 20px;
  }
`;
