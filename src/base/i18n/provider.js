import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import PropTypes from 'prop-types';

import { LOCALE } from './locales';
import messages from './message';

const Provider = ({ children }) => {
    const language = (typeof window !== 'undefined' && window.navigator.language.split('-')[0]) || LOCALE.ENGLISH;

    return (
        <IntlProvider
            locale={language}
            key={language}
            textComponent={Fragment}
            messages={messages[language] || messages[LOCALE.ENGLISH]}
        >
            {children}
        </IntlProvider>
    );
};

Provider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Provider;
