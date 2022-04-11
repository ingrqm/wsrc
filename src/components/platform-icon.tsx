import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAndroid, faApple, faBlackberry, faFreebsd, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Typography } from 'antd';
import { Platform } from 'enums';

const { Paragraph } = Typography;

export const getPlatformIcon = (platform: Platform): IconProp => {
  switch (platform) {
    case Platform.android:
      return faAndroid;
    case Platform.blackBerry:
      return faBlackberry;
    case Platform.freeBSD:
      return faFreebsd;
    case Platform.iOS:
      return faApple;
    case Platform.linux:
      return faLinux;
    case Platform.macintosh:
      return faApple;
    case Platform.windows:
    case Platform.windowsCE:
    case Platform.windowsPhone:
      return faWindows;
    default:
      return faCircleExclamation;
  }
};

type Props = {
  platform: Platform;
  platformVersion: string;
  platformVersionName: string;
};

const PlatformIcon = ({ platform, platformVersion, platformVersionName }: Props) => (
  <Popover
    placement='right'
    content={
      (platform || platformVersion || platformVersionName) && (
        <>
          <Paragraph className='mb-0'>{platform}</Paragraph>
          <Paragraph className='mb-0'>{platformVersionName}</Paragraph>
          <Paragraph className='mb-0'>{platformVersion}</Paragraph>
        </>
      )
    }
    trigger='hover'
  >
    <FontAwesomeIcon icon={getPlatformIcon(platform)} />
  </Popover>
);

export default PlatformIcon;
