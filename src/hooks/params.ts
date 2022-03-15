import { useLocation } from 'react-router-dom';

export default <TParams = unknown>(): TParams => {
  const urlParams = new URLSearchParams(useLocation().search);
  const params = Object.fromEntries(urlParams);

  return params as unknown as TParams;
};
