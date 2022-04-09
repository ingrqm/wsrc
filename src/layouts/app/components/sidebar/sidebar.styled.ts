import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { media } from 'styles';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 250px;
  top: 24px;
  left: ${({ isOpen }) => (isOpen ? '24px' : '-250px')};
  height: calc(100vh - 48px);
  overflow-y: scroll;
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: ${({ theme }) => theme.level.bottom};

  ${media.xs} {
    width: 100%;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;

  .ant-image {
    max-width: 72px;
  }
`;

export const List = styled.ul`
  margin-top: 32px;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: ${({ theme }) => theme.color.light.neutral[10]};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  span.anticon {
    margin-left: 24px;
    margin-right: 12px;
    font-size: 24px;
    color: ${({ theme }) => theme.color.custom.purple[5]};
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.light.neutral[2]};
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const CloseIcon = styled(CloseOutlined)`
  display: none;

  ${media.xs} {
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 24px;
    display: flex;
  }
`;
