import {all,fork, call, put, takeEvery } from 'redux-saga/effects'
import   Api   from '../config/Api';
import actions  from '../actions/contactActions';

const api = new Api();

function get(){
	return api.get('contacts/');
}

function post(contact){
	return api.post('contacts/',contact);
}

function del(id){
	return api.delete(`contacts/${id}`);
}

function update(id,contact){
	return api.put(`contacts/${id}`,contact);
}

export function* contactRequest() {
	yield takeEvery(actions.FETCH_CONTACT_REQUEST, function*({resolve,reject}) {
	  try{
			const response = yield call(get);
			const  contacts  = response.data.data;
			yield put({
				type: actions.FETCH_CONTACT_SUCCESS,
				contacts
			});
			yield call(resolve,response.data.message)
	  } catch(error) {
			yield put({
				type: actions.FETCH_CONTACT_FAILED,
				error
			});
			yield call(reject,error)
	  }
	});

}

export function* onPostContactSaga(){
	yield takeEvery(actions.CREATE_CONTACT_REQUEST, function*({contact,resolve,reject}) {
		try{
			const responsePost = yield call(post,contact)
			const response = yield call(get);
			const  contacts  = response.data.data;
			yield put({
				type: actions.FETCH_CONTACT_SUCCESS,
				contacts
			});
			yield call(resolve,responsePost.data.message);

		} catch(error) {
			console.log("Saga Error",error);
		  //	yield call(reject,error)
		}
	  });
}

export function* onDeleteContactSaga(){
	yield takeEvery(actions.DELETE_CONTACT_REQUEST, function*({id,resolve,reject}) {
		try{
			const deleteResponse = yield call(del,id)
		  const response = yield call(get);
		  const  contacts  = response.data.data;
		  yield put({
			type: actions.FETCH_CONTACT_SUCCESS,
			contacts
			});
			yield call(resolve,deleteResponse.data.message);
		} catch(error) {
		  yield put({
		    type: actions.DELETE_CONTACT_FAILED,
		    error
			});
			yield call(reject,error);
		}
	  });
}

export function* onUpdateContactSaga(){
	yield takeEvery(actions.UPDATE_CONTACT_REQUEST, function*({contact,resolve,reject}) {
		try{
			const data = {
				fullname: contact.fullname ,
				phone: contact.phone
			}
		   const updateResponse = yield call(update,contact.id,data)
		   const response = yield call(get);
			 const  contacts  = response.data.data;
				yield put({
					type: actions.FETCH_CONTACT_SUCCESS,
					contacts
				});
			yield call(resolve,updateResponse.data.message);
		} catch(error) {
		  	yield call(reject,error)
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
  