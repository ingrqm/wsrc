import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 72px;
  background: ${({ theme }) => theme.color.custom.purple[5]};
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navbar = styled.div`
  .ant-typography {
    color: #fff;
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

export const TimeDistanceWrapper = styled.div`
  display: flex;
  min-width: 225px;
  justify-content: space-between;
`;
