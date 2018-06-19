import {all,fork, call,take, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import {
	fetchContact
} from '../config/api';
import {
	fetchContactRequest
} from '../actions/contactActions';

import {
	CREATE_CONTACT_REQUEST,
	FETCH_CONTACT_REQUEST,
	FETCH_CONTACT_SUCCESS,
	FETCH_CONTACT_FAILED,
	DELETE_CONTACT_REQUEST
} from '../actions/types';

function getContactsJson(){
    return  axios.get('http://127.0.0.1:3001/api/v1/contacts/')
}

function onPostContactJson(contact){
	return axios.post('http://127.0.0.1:3001/api/v1/contacts/', {
		fullname: contact.fullname ,
		phone: contact.phone
	  })
}
function onDeleteContactJson(id){
	return axios.delete('http://127.0.0.1:3001/api/v1/contacts/' + id)
}


export function* contactRequest() {
	yield takeEvery(FETCH_CONTACT_REQUEST, function*(data) {
	  try{
		const response = yield call(getContactsJson);
		const  contacts  = response.data.data;
		yield put({
		  type: FETCH_CONTACT_SUCCESS,
		  contacts
		});
	  } catch(error) {
		// yield put({
		//   type: actions.LOGIN_ERROR,
		//   error
		// });
	  }
	});
  
  }

export function* onPostContactSaga(){
	yield takeEvery(CREATE_CONTACT_REQUEST, function*(data) {
		try{
		   yield call(onPostContactJson,data.contact)
		  const response = yield call(getContactsJson);
		  const  contacts  = response.data.data;
		  yield put({
			type: FETCH_CONTACT_SUCCESS,
			contacts
		  });
		} catch(error) {
		  // yield put({
		  //   type: actions.LOGIN_ERROR,
		  //   error
		  // });
		}
	  });
}

export function* onDeleteContactSaga(){
	yield takeEvery(DELETE_CONTACT_REQUEST, function*(data) {
		try{
		   yield call(onDeleteContactJson,data.id)
		  const response = yield call(getContactsJson);
		  const  contacts  = response.data.data;
		  yield put({
			type: FETCH_CONTACT_SUCCESS,
			contacts
		  });
		} catch(error) {
		  // yield put({
		  //   type: actions.LOGIN_ERROR,
		  //   error
		  // });
		}
	  });
}


  
  export default function* contactWatcherSaga() {
	yield all([
	  fork(onPostContactSaga),
	  fork(contactRequest),
	  fork(onDeleteContactSaga)
	]);
  }
  