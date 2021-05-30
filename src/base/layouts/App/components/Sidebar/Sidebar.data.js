import { roles } from 'consts';

import { Dashboard } from '@material-ui/icons';

import { appUrls } from 'urls';

export const list = {
  [roles.newbie]: [
    {
      icon: <Dashboard color="primary" />,
      text: 'dashboard',
      url: appUrls.app.dashboard,
    },
  ],
  [roles.member]: [
    {
      icon: <Dashboard color="primary" />,
      text: 'dashboard',
      url: appUrls.app.dashboard,
    },
  ],
  [roles.arbiter]: [
    {
      icon: <Dashboard color="primary" />,
      text: 'dashboard',
      url: appUrls.app.dashboard,
    },
  ],
};