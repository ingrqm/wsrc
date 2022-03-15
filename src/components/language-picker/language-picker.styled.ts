import styled from 'styled-components';

export const StyledFlag = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 18px;
    margin-right: 8px;
  }
`;

export const StyledLanguageIcon = styled.div`
  position: relative;
  padding: 12px 24px 0 12px;

  svg:not(:first-child) {
    width: 16px;
    height: 12px;
    position: absolute;
    top: 4px;
    right: 8px;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    right: 7px;
    width: 18px;
    height: 12px;
    display: block;
    background: ${({ theme }) => theme.color.light.neutral[4]};
    z-index: 0;
  }
`;
