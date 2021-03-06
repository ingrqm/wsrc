import styled from 'styled-components';
import { media } from 'styles';

export const Wrapper = styled.div`
  .ant-row {
    width: 100%;
  }

  .ant-input[disabled] {
    color: rgba(0, 0, 0, 1);
    background-color: #fff;
  }

  ${media.xs} {
    .ant-steps-vertical {
      width: 24px;
    }
  }
`;

export const Navigation = styled.div`
  .ant-btn {
    &.submit-review {
      position: fixed;
      top: calc(50% + 36px);
      transform: translateY(-50%);
      right: 24px;
      z-index: ${({ theme }) => theme.level.bottom};
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 582px;
  min-height: calc(100vh - 72px - 56px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  padding-top: 24px;
  margin: 0 auto;
`;

export const Actions = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
