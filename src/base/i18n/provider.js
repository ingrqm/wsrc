import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import PropTypes from 'prop-types';

import { LOCALE } from './locales';
import messages from './message';

const Provider = ({ children }) => {
  // const language = (typeof window !== 'undefined' && window.navigator.language.split('-')[0]) || LOCALE.ENGLISH;
  const language = LOCALE.ENGLISH;

  return (
    <IntlProvider
      key={language}
      locale={language}
      messages={messages[language] || messages[LOCALE.ENGLISH]}
      textComponent={Fragment}
    >
      {children}
    </IntlProvider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Provider;