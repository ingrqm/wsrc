import { css } from 'styled-components';

export const button = css`
  .ant-btn {
    border-radius: 8px;
    height: auto;
    padding: 12px 0px;
    font-size: 16px;
    font-weight: 500;
  }

  .ant-btn:hover,
  .ant-btn:focus {
    border: none;
  }

  .ant-btn-primary {
    background: ${({ theme }) => theme.color.custom.blue[1]};
    border: none;
    box-shadow: 0px 10px 30px rgba(0, 157, 220, 0.1);
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    background: ${({ theme }) => theme.color.custom.blue[2]};
  }

  .ant-btn-primary[disabled],
  .ant-btn-primary[disabled]:hover {
    background: ${({ theme }) => theme.color.custom.blue[1]};
    color: #fff;
    opacity: 0.5;
  }
`;
