import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { pdfjs } from 'react-pdf';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createRoot } from 'react-dom/client';
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

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
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
  </React.StrictMode>
);
