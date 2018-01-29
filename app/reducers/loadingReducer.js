import createReducer from '@lib/createReducer';
import * as actionTypes from '@actions/actionTypes';

const initialState = {
    isSearchLoading: false
};

export const loadingReducer = createReducer(initialState, {
    [actionTypes.ENABLE_SEARCH_LOADER](state) {
        return { ...state, isSearchLoading: true };
    },
    [actionTypes.DISABLE_SEARCH_LOADER](state) {
        return { ...state, isSearchLoading: false };
    }
});
