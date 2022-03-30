import styled from 'styled-components';
import { media } from 'styles';

export const HeaderImage = styled.div<{ isSignInPage: boolean }>`
  position: fixed;
  width: 50vw;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 24px 48px;

  h1.ant-typography,
  h3.ant-typography {
    color: ${({ theme }) => theme.color.light.neutral[1]};
    position: relative;
    z-index: 2;
  }

  h1.ant-typography {
    margin: 0;
  }

  h3.ant-typography {
    margin: 14px 0 0 0;
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.color.custom.purple[5]};
    opacity: ${({ isSignInPage }) => (isSignInPage ? '0.4' : '1.0')};
  }

  .ant-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  .ant-image-img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: 33% 50%;
  }

  svg {
    position: absolute;
    z-index: 1;

    &.circle-small {
      top: 163px;
      right: 228px;
    }

    &.circle-small ~ .circle-small {
      top: auto;
      right: auto;
      bottom: 48px;
      left: 48px;
    }

    &.circle-big {
      top: 48px;
      right: 48px;
    }

    &.triangle {
      top: 200px;
      left: 34px;
    }

    &.triangle-small {
      bottom: 113px;
      right: 260px;
    }

    &.triangle-big {
      bottom: 24px;
      right: 24px;
    }
  }

  ${media.sm} {
    display: none;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 48px;

  ${media.xs} {
    padding: 24px;
  }

  .ant-form {
    max-width: 450px;
    width: 100%;
  }
`;

export const StyledLogoImg = styled.div`
  max-width: 120px;
  width: 100%;
  margin-bottom: 36px;
`;

export const StyledWrapperLanguagePicker = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
