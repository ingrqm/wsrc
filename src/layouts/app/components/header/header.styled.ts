import styled from 'styled-components';
import { media } from 'styles';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  min-height: 72px;
  padding-left: ${({ isOpen }) => (isOpen ? 'calc(250px + 48px)' : '24px')};
  background: ${({ theme }) => theme.color.custom.gray[0]};
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${media.xs} {
    padding-left: 24px;
  }
`;

export const Navbar = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;

  span.anticon {
    font-size: 20px;
    color: ${({ theme }) => theme.color.custom.blue[0]};

    &:not(:last-child) {
      margin-right: 25px;
    }
  }
`;

export const NavbarUserItem = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Hero = styled.div`
  padding: 102px 0;
  text-align: center;

  h1 {
    margin-bottom: 24px;
  }

  h5 {
    margin-bottom: 0;
  }

  .ant-typography {
    color: #fff;
  }
`;
