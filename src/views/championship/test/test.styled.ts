import styled from 'styled-components';
import { media } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ant-form-item {
      max-width: 500px;
      width: 100%;
      margin-bottom: 48px;
    }
  }

  ${media.xs} {
    .ant-steps-vertical {
      width: 24px;
    }
  }

  .page-action-btn {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color.light.neutral[8]};
    font-size: 18px;

    &.prev {
      left: -140px;
      ${media.xs} {
        left: -10px !important;
      }
    }

    &.next {
      right: -140px;
      ${media.xs} {
        right: -10px !important;
      }
    }
  }
`;

export const Navigation = styled.div`
  .ant-btn {
    &.end-competition {
      position: fixed;
      top: calc(50% + 36px);
      transform: translateY(-50%);
      right: 24px;
      color: #fff;
      background: ${({ theme }) => theme.color.custom.blue[1]};
      font-size: 13px;
      padding: 15px 12px;
      z-index: ${({ theme }) => theme.level.bottom};

      ${media.xs} {
        bottom: 10px;
        top: unset !important;
        transform: unset !important;
      }
    }
  }
`;

export const FormWrapper = styled.div``;

export const Main = styled.div`
  width: 100%;
  max-width: 582px;
  min-height: calc(100vh - 72px - 56px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
  margin: 0 auto;
  box-shadow: -2px 4px 85px rgba(187, 187, 187, 0.2);
  border-radius: 8px;
  background: #fff;
`;

export const Actions = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
