import { Progress } from 'antd';
import styled from 'styled-components';
import { media } from '../../../../../styles';

export const TimerWrapper = styled.div`
  ${media.md} {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;

export const Timer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TimerItem = styled.div`
  display: block;
  font-weight: 400;
  font-size: 45px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.custom.blue[0]};

  span {
    display: block;
    font-weight: 300;
    font-size: 15px;
    color: ${({ theme }) => theme.color.custom.blue[0]};
  }
`;

export const StyledProgress = styled(Progress)`
  .ant-progress-inner {
    background-color: ${({ theme }) => theme.color.light.neutral[3]};
  }

  .ant-progress-bg {
    background-color: ${({ theme }) => theme.color.custom.blue[1]};
  }
`;
