import { FC } from 'react';
import styled from 'styled-components';

const StyledDot = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.color.light.geekBlue[6]};
`;

const App: FC = () => (
  <h1 className='text-3xl font-bold decoration-slate-100 text-sky-400/25'>
    Hello world!
    <StyledDot />
  </h1>
);

export default App;