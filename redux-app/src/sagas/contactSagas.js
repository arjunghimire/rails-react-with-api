import {all,fork, call,take, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {
	fetchContact
} from '../config/api';

import actions  from '../actions/contactActions';

function getContactsJson(){
    return axios.get('http://127.0.0.1:3001/api/v1/contacts/')
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

function onUpdateContactJson(contact){
	return axios.put('http://127.0.0.1:3001/api/v1/contacts/' + contact.id, {
		fullname: contact.fullname ,
		phone: contact.phone
	  })
}

export function* contactRequest() {
	yield takeEvery(actions.FETCH_CONTACT_REQUEST, function*(data) {
	  try{
		const response = yield call(getContactsJson);
		const  contacts  = response.data.data;
		yield put({
		  type: actions.FETCH_CONTACT_SUCCESS,
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
	yield takeEvery(actions.CREATE_CONTACT_REQUEST, function*(data) {
		try{
		   yield call(onPostContactJson,data.contact)
		  const response = yield call(getContactsJson);
		  const  contacts  = response.data.data;
		  yield put({
			type: actions.FETCH_CONTACT_SUCCESS,
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
	yield takeEvery(actions.DELETE_CONTACT_REQUEST, function*(data) {
		try{
		  yield call(onDeleteContactJson,data.id)
		  const response = yield call(getContactsJson);
		  const  contacts  = response.data.data;
		  yield put({
			type: actions.FETCH_CONTACT_SUCCESS,
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

export function* onUpdateContactSaga(){
	yield takeEvery(actions.UPDATE_CONTACT_REQUEST, function*({contact,resolve,reject}) {
		try{
		   
		   yield call(onUpdateContactJson,contact)
		   const response = yield call(getContactsJson);
			 const  contacts  = response.data.data;
		  yield put({
				type: actions.FETCH_CONTACT_SUCCESS,
				contacts
			});
			yield call(resolve);
		} catch(error) {
			yield call(reject)
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
		fork(onDeleteContactSaga),
		fork(onUpdateContactSaga)
	]);
  }
  