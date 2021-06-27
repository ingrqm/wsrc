/* eslint-disable react/jsx-props-no-spreading */
import NextNprogress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import SnackbarProvider from 'providers/snackbar';
import { store } from 'redux/store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import i18n from 'i18n';

const queryClient = new QueryClient();

const theme = createMuiTheme({
  palette: {
    dark: {
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

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
