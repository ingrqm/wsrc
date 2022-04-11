import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faAndroid,
  faBlackberry,
  faChrome,
  faEdge,
  faFirefox,
  faInternetExplorer,
  faOpera,
  faSafari,
} from '@fortawesome/free-brands-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Typography } from 'antd';
import { Browser } from 'enums';

const { Paragraph } = Typography;

export const getBrowserIcon = (browser: Browser): IconProp => {
  switch (browser) {
    case Browser.android:
      return faAndroid;
    case Browser.blackBerry:
    case Browser.blackBerryTabletOs:
      return faBlackberry;
    case Browser.chrome:
      return faChrome;
    case Browser.edge:
      return faEdge;
    case Browser.firefox:
      return faFirefox;
    case Browser.internetExplorer:
    case Browser.internetExplorerMobile:
      return faInternetExplorer;
    case Browser.opera:
    case Browser.operaMini:
    case Browser.operaMobile:
      return faOpera;
    case Browser.safari:
      return faSafari;
    default:
      return faCircleExclamation;
  }
};

type Props = {
  browser: Browser;
  browserVersion: string;
};

const BrowserIcon = ({ browser, browserVersion }: Props) => (
  <Popover
    placement='right'
    content={
      (browser || browserVersion) && (
        <>
          <Paragraph className='mb-0'>{browser}</Paragraph>
          <Paragraph className='mb-0'>{browserVersion}</Paragraph>
        </>
      )
    }
    trigger='hover'
  >
    <FontAwesomeIcon icon={getBrowserIcon(browser)} />
  </Popover>
);

export default BrowserIcon;
