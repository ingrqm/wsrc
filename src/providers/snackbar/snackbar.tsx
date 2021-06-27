import { useRef, FC } from 'react';

import { ReportProblemOutlined, ErrorOutline, DoneAll, Close } from '@material-ui/icons';

import { SnackbarProvider } from 'notistack';

import { StyledIconWrapper, StyledIconButton } from './snackbar.styled';

const Provider: FC = ({ children }) => {
  const notistackRef = useRef(null);

  const onClickDismiss = (key) => () => {
    notistackRef?.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      action={(key) => (
        <StyledIconButton color='default' onClick={onClickDismiss(key)}>
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

export default Provider;
