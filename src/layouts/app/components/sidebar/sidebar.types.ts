import { SvgIconProps } from '@material-ui/core';

export type ItemTypes = {
  icon: SvgIconProps;
  text: string;
  onClick?: () => void;
};
