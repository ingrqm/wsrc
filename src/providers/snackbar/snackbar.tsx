import { FC } from 'react';

import { ReportProblemOutlined, ErrorOutline, DoneAll, Close } from '@material-ui/icons';

import { SnackbarKey, SnackbarProvider, useSnackbar } from 'notistack';

import { StyledIconWrapper, StyledIconButton } from './snackbar.styled';

const DismissAction: FC<{ id: SnackbarKey }> = ({ id }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <StyledIconButton color='default' onClick={() => closeSnackbar(id)}>
      <Close />
    </StyledIconButton>
  );
};

const Provider: FC = ({ children }) => (
  <SnackbarProvider
    action={(key) => <DismissAction id={key} />}
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
  >
    {children}
  </SnackbarProvider>
);

export default Provider;
