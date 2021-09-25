import { store } from '@redux/store';

export const getNow = (): number => {
  const { user } = store.getState();

  return user.serverTime && user.clientTime ? user.serverTime + (Date.now() - user.clientTime) : Date.now();
};
