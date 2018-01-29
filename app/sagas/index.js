import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import userSaga from './userSaga';

export default function* watch() {
    yield [takeLatest(actionTypes.REQUEST_USERS, userSaga)];
}
