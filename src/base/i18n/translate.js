import React from 'react';
import { FormattedMessage } from 'react-intl';

const translate = (id, options = { values: {} }) => {
    if (options.intl) {
        return options.intl.formatMessage({ id: id }, { ...options.values });
    } else {
        return <FormattedMessage id={id} values={{ ...options.values }} />;
    }
};

export default translate;
