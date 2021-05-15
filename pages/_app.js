import { Provider } from 'react-redux';

import { I18nProvider } from 'base/i18n';
import configureStore from 'base/redux/configureStore';

import PropTypes from 'prop-types';

const store = configureStore();

import 'asset/style/index.scss';

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <I18nProvider>
                <Component {...pageProps} />
            </I18nProvider>
        </Provider>
    );
};

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default App;
