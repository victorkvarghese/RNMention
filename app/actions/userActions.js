/*
 * Reducer actions related with github user data
 */
import * as types from './actionTypes';

export function searchUsers(searchString) {
    return {
        type: types.REQUEST_USERS,
        searchString
    };
}

export function onUserResponse(users) {
    return {
        type: types.USERS_RESPONSE,
        users
    };
}

export function enableLoader() {
    return {
        type: types.ENABLE_SEARCH_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.DISABLE_SEARCH_LOADER
    };
}
