import { translate } from 'base/i18n';

import styles from './Landing.module.scss';

const Landing = () => {
    return <div className={styles.title}>{translate('page.home.title')}</div>;
};

export default Landing;
