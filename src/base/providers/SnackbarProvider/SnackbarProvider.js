import { useRef } from 'react';

import Fade from '@material-ui/core/Fade';
import { SnackbarProvider } from 'notistack';
import { node } from 'prop-types';

import { ReportProblemOutlined, ErrorOutline, DoneAll, Close } from '@material-ui/icons';

import { StyledIconWrapper, StyledIconButton } from './SnackbarProvider.styled';

const Provider = ({ children }) => {
  const notistackRef = useRef();

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      TransitionComponent={Fade}
      action={(key) => (
        <StyledIconButton color="default" onClick={onClickDismiss(key)}>
          <Close />
        </StyledIconButton>
      )}
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
      ref={notistackRef}
    >
      {children}
    </SnackbarProvider>
  );
};

Provider.propTypes = {
  children: node,
};

export default Provider;
