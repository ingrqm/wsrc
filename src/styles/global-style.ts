import { createGlobalStyle } from 'styled-components';
import { dropdown, form, tabs, typography, popover, button } from './components';
import { theme } from 'styles';

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  ${dropdown}
  ${form}
  ${tabs}
  ${typography}
  ${popover}
  ${button}
`;
