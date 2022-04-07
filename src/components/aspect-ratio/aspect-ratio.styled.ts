import styled from 'styled-components';

export const AspectRatio = styled.div<{ x: number; y: number }>`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({ x, y }) => `${(y / x) * 100}%`};

  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
