export const ADD = 'alerts.ADD';
export const REMOVE = 'alerts.REMOVE';

export const alertsActions = {
  add: (payload) => ({ type: ADD, payload }),
  delete: (payload) => ({ type: REMOVE, payload }),
};
