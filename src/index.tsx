import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import Routes from 'routes';
import styled, { ThemeProvider } from 'styled-components';
import { TimeCounter } from 'components';
import { GlobalStyle, theme } from 'styles';

import 'utils/i18next';

import 'antd/dist/antd.css';
import 'styles/global-style.css';

const Wrapper = styled.div`
  > button {
    margin: 36px 36px !important;
  }
`;

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} containerElement={Wrapper} />
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <TimeCounter />
            <Routes />
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
