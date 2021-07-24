/* eslint-disable react/jsx-props-no-spreading */
import { AppProps, NextWebVitalsMetric } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

import SnackbarProvider from '@providers/snackbar';

import { wrapper } from '@redux/store';

import i18n from '@utils/i18n';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle } from 'styled-components';

const queryClient = new QueryClient();

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#01001e',
      contrastText: '#adb7c2',
    },
  },
});

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *:active,
  *:focus {
    outline: 0;
  }

  :root {
    font-size: 16px;
  }

  :root,
  body,
  #__next {
    min-height: calc(100vh + 1px);
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
  // eslint-disable-next-line no-console
  console.log(metric);
};

const persistor = persistStore(store);

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <PersistGate loading={null} persistor={persistor}>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <GlobalStyle />
            <NextNprogress color='#4dbdbe' height={3} startPosition={0} stopDelayMs={200} />
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  </PersistGate>
);

export default wrapper.withRedux(App);
