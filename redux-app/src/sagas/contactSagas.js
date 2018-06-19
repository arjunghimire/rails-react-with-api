import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import {
	fetchContact
} from '../config/api';

import {
	CREATE_CONTACT_REQUEST,
	FETCH_CONTACT_REQUEST,
	FETCH_CONTACT_SUCCESS,
	FETCH_CONTACT_FAILED
} from '../actions/types';



export function* fetchContactSaga(action){
	const contacts  = yield call(fetchContact, action.contact);
	console.log("contactSaga",contacts.data.data);
	yield {type: FETCH_CONTACT_REQUEST, contacts: contacts.data.data}
}