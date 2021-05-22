import NextNprogress from 'nextjs-progressbar';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { I18nProvider } from 'base/i18n';
import SnackbarProvider from 'base/providers/SnackbarProvider';
import configureStore from 'base/redux/configureStore';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { func, object } from 'prop-types';

import 'asset/style/index.css';

const store = configureStore();
const queryClient = new QueryClient();

const theme = createMuiTheme({
  palette: {
    dark: {
      main: '#0d1117',
      contrastText: '#c9d1d9',
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nProvider>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <NextNprogress color="#303f9f" height={3} startPosition={0} stopDelayMs={200} />
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
