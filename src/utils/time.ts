import { store } from 'redux/store';

export const getNow = (): number => {
  const { user } = store.getState();

  return user.serverTime + (Date.now() - user.clientTime);
};
