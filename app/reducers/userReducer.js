/* User Reducer
 * handles requesting github users in the app
 */
import createReducer from '@lib/createReducer';
import * as actionTypes from '@actions/actionTypes';

const initialState = {
    users: []
};

export const userReducer = createReducer(initialState, {
    [actionTypes.REQUEST_USERS](state) {
        return {
            ...state
        };
    },
    [actionTypes.USERS_RESPONSE](state, action) {
        return {
            ...state,
            users: action.users
        };
    }
});
