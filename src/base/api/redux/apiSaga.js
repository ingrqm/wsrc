import { request } from 'base/api';
import { REQUEST, SUCCESS, FAILURE } from 'base/redux/consts';

import { call, put, takeEvery } from 'redux-saga/effects';

export const getError = (error) => {
    if (error.response?.data) {
        const { detail, ...fields } = error.response.data;

        const errors = Object.values(fields)
            .map((field) => field && field[0])
            .join('\n');

        return detail || errors;
    }

    return error.message || 'Wystąpił błąd';
};

/**
 * Method creates saga for an API request.
 * @param {string} type - The type of the action.
 */

export const apiSaga = (type) => {
    function* callApi(action) {
        try {
            let data;
            const { data: requestData } = yield call(
                request,
                action.api,
                action.method,
                action.endpoint,
                action.payload,
            );
            data = requestData;
            if (action.extendResponse) {
                data = {
                    ...data,
                    ...action.extendResponse,
                };
            }
            if (!data) {
                data = {
                    success: true,
                };
            }
            yield put({
                type: type + SUCCESS,
                data,
            });
            if (action.afterSagaSuccess) {
                yield call(action.afterSagaSuccess, data);
            }
        } catch (error) {
            yield put({
                type: type + FAILURE,
                error: getError(error),
            });
        }
    }

    return function* () {
        yield takeEvery(type + REQUEST, callApi);
    };
};
