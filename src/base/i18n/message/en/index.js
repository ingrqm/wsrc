import { LOCALE } from 'base/i18n/locales';

import app from './app';
import docs from './docs';
import error from './error';
import portal from './portal';

export default {
    [LOCALE.ENGLISH]: {
        ...app,
        ...docs,
        ...error,
        ...portal,
    },
};
