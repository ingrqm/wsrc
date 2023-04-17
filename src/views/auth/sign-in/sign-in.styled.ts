import styled from 'styled-components';

export const StyledTitleWrapper = styled.div`
  display: block;
  max-width: 450px;
  width: 100%;
  letter-spacing: 0.03em;

  h2 {
    color: ${({ theme }) => theme.color.custom.blue[0]};
    font-weight: 500;
    font-size: 45px;
    line-height: 45px;

    span {
      color: ${({ theme }) => theme.color.custom.blue[1]};
      display: block;
    }
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.custom.blue[0]};
  }
`;
