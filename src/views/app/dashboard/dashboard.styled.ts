import { Col } from 'antd';
import styled from 'styled-components';
import { media } from 'styles';

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

export const Widget = styled(Col)`
  width: 230px;

  ${media.xs} {
    width: 100%;
  }

  div.ant-typography {
    margin-bottom: 8px;
  }
`;
