import { Card } from 'antd';
import styled from 'styled-components';
import { media } from 'styles';

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
      bottom: 50%;
      left: 10%;
    }

    &.next-page {
      bottom: 50%;
      right: 10%;
    }
  }
`;

export const MainWrapper = styled.div`
  position: relative;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .ant-btn {
    background: transparent;
    border: none;
    position: relative;
    color: ${({ theme }) => theme.color.light.neutral[7]};
    box-shadow: none;
    margin-right: 20px;
  }

  .previous-page,
  .next-page {
    right: unset !important;
    left: unset !important;
  }

  .first-page,
  .last-page {
    font-size: 12px;
  }

  .start-test-option {
    color: ${({ theme }) => theme.color.custom.blue[1]};
    background: ${({ theme }) => theme.color.light.neutral[1]};
    font-size: 12px;
    padding: 0 5px;
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

  .book-doc {
    border-radius: 8px;
    box-shadow: -2px 4px 85px rgba(187, 187, 187, 0.2);
    width: auto;
    height: auto;
    background: ${({ theme }) => theme.color.light.neutral[1]};
    padding: 0 40px;
    max-width: 100%;

    ${media.xs} {
      padding: 0;
    }
  }

  .previous-page,
  .next-page {
    background: transparent;
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.color.light.neutral[8]};
    font-size: 18px;
  }

  .next-page {
    left: 40px;
  }

  .previous-page {
    right: 40px;
  }

  .start-test {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 10px 30px rgba(0, 157, 220, 0.1);
    border-radius: 8px;
    font-weight: 500;
    font-size: 12px;
    padding: 15px 10px;
  }
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

export const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin-top: 5px;
  border: none;
  max-width: 100%;

  &.left-page {
    border-right: 1px solid ${({ theme }) => theme.color.custom.gray[4]};
  }

  .ant-card-body {
    position: relative;
    padding: 0 !important;
    border-radius: 10px;
    overflow: scroll;
  }
`;
