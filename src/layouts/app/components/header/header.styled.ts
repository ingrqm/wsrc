import styled from 'styled-components';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  min-height: 72px;
  padding-left: ${({ isOpen }) => (isOpen ? 'calc(250px + 48px)' : '24px')};
  background: ${({ theme }) => theme.color.custom.purple[5]};
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Navbar = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;

  span.anticon {
    font-size: 24px;
    color: #fff;

    &:not(:last-child) {
      margin-right: 48px;
    }
  }
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
