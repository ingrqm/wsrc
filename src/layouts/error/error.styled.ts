import styled from 'styled-components';
import { media } from 'styles';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px;

  ${media.xs} {
    padding: 24px;
  }
`;

export const StyledWrapperLanguagePicker = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
