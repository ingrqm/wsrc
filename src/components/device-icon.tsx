import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleExclamation, faComputer, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Device } from 'enums';

export const getDeviceIcon = (device: Device): IconProp => {
  switch (device) {
    case Device.mobile:
      return faMobile;
    case Device.desktop:
      return faComputer;
    default:
      return faCircleExclamation;
  }
};

type Props = {
  device: Device;
};

const DeviceIcon = ({ device }: Props) => <FontAwesomeIcon icon={getDeviceIcon(device)} />;

export default DeviceIcon;
