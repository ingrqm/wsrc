import { Permission } from 'enums/permission';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Dashboard } from '@material-ui/icons';

import { appUrls } from 'urls';

type List = {
  [key: string]: {
    icon: SvgIconProps;
    text: string;
    url: string;
  }[];
};

export const list: List = {
  [Permission.newbie]: [
    {
      icon: <Dashboard color='primary' />,
      text: 'dashboard',
      url: appUrls.app.dashboard,
    },
  ],
  [Permission.member]: [
    {
      icon: <Dashboard color='primary' />,
      text: 'dashboard',
      url: appUrls.app.dashboard,
    },
  ],
  [Permission.arbiter]: [
    {
      icon: <Dashboard color='primary' />,
      text: 'dashboard',
      url: appUrls.app.dashboard,
    },
  ],
};
