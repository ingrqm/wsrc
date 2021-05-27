import NextNprogress from 'nextjs-progressbar';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { I18nProvider } from 'base/i18n';
import SnackbarProvider from 'base/providers/SnackbarProvider';
import configureStore from 'base/redux/configureStore';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { func, object } from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const store = configureStore();
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

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nProvider>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <GlobalStyle />
              <NextNprogress color="#4dbdbe" height={3} startPosition={0} stopDelayMs={200} />
              <Component {...pageProps} />
            </SnackbarProvider>
          </ThemeProvider>
        </I18nProvider>
      </QueryClientProvider>
    </Provider>
  );
};

App.propTypes = {
  Component: func,
  pageProps: object,
};

export default App;
