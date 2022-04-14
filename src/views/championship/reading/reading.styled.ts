import { Card } from 'antd';
import styled from 'styled-components';

export const Navigation = styled.div`
  .ant-btn {
    position: fixed;
    z-index: ${({ theme }) => theme.level.bottom};

    &.previous-chapter {
      top: calc(24px + 72px);
      left: 24px;
    }

    &.next-chapter {
      top: calc(24px + 72px);
      right: 24px;
    }

    &.start-test {
      top: calc(50% + 36px);
      transform: translateY(-50%);
      right: 24px;
    }

    &.previous-page {
      bottom: 24px;
      left: 24px;
    }

    &.next-page {
      bottom: 24px;
      right: 24px;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;

  .ant-btn {
    position: relative;

    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

export const Main = styled.div`
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  min-height: calc(100vh - 72px - 56px);
  height: 100%;
  display: flex;
  align-items: top;
  justify-content: center;
  padding-top: 24px;
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;

  > div:not(:last-child) {
    margin-right: 24px;
  }
`;

export const PagePagination = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 12px;
`;

export const StyledCard = styled(Card)<{ $width?: number; $height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $width }) => $width && `min-width: calc(${$width}px + 2px);`};
  ${({ $height }) => $height && `min-height: calc(${$height}px + 2px);`};

  .ant-card-body {
    position: relative;
    padding: 0 !important;
  }
`;
