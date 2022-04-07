import styled from 'styled-components';

export const Wrapper = styled.div`
  .ant-col {
    text-align: center;
    .ant-col {
      text-align: left;
    }
  }

  .ant-typography {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
