import styled from 'styled-components';
import { media } from 'styles';

export const HeaderImage = styled.div<{ isSignInPage: boolean }>`
  position: fixed;
  width: 50vw;
  top: 0;
  left: 0;
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

  .ant-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12em 15em;
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
  background: ${({ theme }) => theme.color.custom.gray[0]};
  border-radius: 50px 0px 0px 0px;

  ${media.xs} {
    padding: 24px;
  }

  .ant-form {
    max-width: 450px;
    width: 100%;
  }

  .auth-p {
    position: absolute;
    top: 50px;
    right: 100px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.custom.blue[0]};

    ${media.sm} {
      top: unset;
      bottom: 20px;
    }

    a {
      color: ${({ theme }) => theme.color.custom.blue[1]};
    }
  }
`;

export const StyledLogoImg = styled.div`
  max-width: 80px;
  width: 100%;
  margin: 20px 40px;

  ${media.sm} {
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    margin: 20px 0;
  }
`;

export const StyledWrapperLanguagePicker = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
