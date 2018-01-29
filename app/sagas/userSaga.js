import { put, call } from 'redux-saga/effects';
import searchUsers from '@api/methods/searchUsers';
import * as userActions from '@actions/userActions';

// Our worker Saga that fetches form details
export default function* userAsync(action) {
    yield put(userActions.enableLoader());

    try {
        const response = yield call(searchUsers, action.searchString);

        if (response) {
            yield put(userActions.onUserResponse(response.items));
            yield put(userActions.disableLoader({}));
        } else {
            yield put(userActions.disableLoader({}));
        }
    } catch (error) {
        yield put(userActions.disableLoader({}));
    }
}
