import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { media } from 'styles';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 250px;
  top: 0px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  height: calc(100vh - 48px);
  overflow-y: scroll;
  border-radius: 0px;
  background: #fff;
  border: 1px solid #fbfbfb;
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
  padding: 0 20px;
  list-style: none;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 0;
  color: ${({ theme }) => theme.color.custom.blue[3]};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  span.anticon {
    margin-left: 24px;
    margin-right: 12px;
    font-size: 20px;
    color: ${({ theme }) => theme.color.custom.orange[0]};
  }

  &:hover {
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.active,
  &:hover {
    background: ${({ theme }) => theme.color.custom.purple[7]};
    color: ${({ theme }) => theme.color.custom.gray[3]};

    span.anticon {
      color: rgba(255, 255, 255, 0.5);
    }
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
