import { useRef } from 'react';

import { SnackbarProvider } from 'notistack';
import { node } from 'prop-types';

import Fade from '@material-ui/core/Fade';
import { ReportProblemOutlined, ErrorOutline, DoneAll, Close } from '@material-ui/icons';

import { StyledIconWrapper, StyledIconButton } from './SnackbarProvider.styled';

const Provider = ({ children }) => {
  const notistackRef = useRef();

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      ref={notistackRef}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      iconVariant={{
        success: (
          <StyledIconWrapper>
            <DoneAll />
          </StyledIconWrapper>
        ),
        error: (
          <StyledIconWrapper>
            <ErrorOutline />
          </StyledIconWrapper>
        ),
        warning: (
          <StyledIconWrapper>
            <ReportProblemOutlined />
          </StyledIconWrapper>
        ),
        info: (
          <StyledIconWrapper>
            <ReportProblemOutlined />
          </StyledIconWrapper>
        ),
      }}
      maxSnack={6}
      TransitionComponent={Fade}
      action={(key) => (
        <StyledIconButton color="default" onClick={onClickDismiss(key)}>
          <Close />
        </StyledIconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};

Provider.propTypes = {
  children: node,
};

export default Provider;
