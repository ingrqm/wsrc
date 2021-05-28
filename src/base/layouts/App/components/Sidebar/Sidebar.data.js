import { roles } from 'consts';

import { Dashboard, ExitToApp } from '@material-ui/icons';

import { appUrls } from 'urls';

export const list = {
  [roles.newbie]: [
    {
      icon: <Dashboard color="primary" />,
      text: 'dashboard',
      url: appUrls.app.dashboard,
    },
    {
      icon: <ExitToApp color="primary" />,
      text: 'sign out',
    },
  ],
};
