import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FETCH_CONTACT_REQUEST } from '../actions/types';
import { fetchContactSaga } from './contactSagas';


export  default  function* rootSaga(){
	yield takeLatest(FETCH_CONTACT_REQUEST,fetchContactSaga);
}
