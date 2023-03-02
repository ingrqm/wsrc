import { css } from 'styled-components';

export const typography = css`
  h1.ant-typography,
  .ant-typography h1,
  h2.ant-typography,
  .ant-typography h2,
  h3.ant-typography,
  .ant-typography h3,
  h4.ant-typography,
  .ant-typography h4,
  h5.ant-typography,
  .ant-typography h5,
  h6.ant-typography,
  .ant-typography h6 {
    font-weight: 500;
  }

  .ant-typography.underlined-link {
    color: ${({ theme }) => theme.color.custom.gray[2]};
    text-decoration-line: underline;
    font-weight: 400;
    font-size: 13px;
    text-underline-offset: 4px;
  }

  .ant-typography.underlined-link:hover {
    text-decoration-line: underline;
    color: ${({ theme }) => theme.color.custom.blue[1]};
  }
`;
