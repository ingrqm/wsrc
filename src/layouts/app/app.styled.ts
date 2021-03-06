import styled from 'styled-components';
import { media } from 'styles';

export const Content = styled.div<{ isOpen: boolean }>`
  padding: 24px 24px 24px ${({ isOpen }) => (isOpen ? 'calc(250px + 48px)' : '24px')};
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${media.xs} {
    padding: 24px;
  }

  > .ant-typography {
    margin-bottom: 24px;
  }
`;
