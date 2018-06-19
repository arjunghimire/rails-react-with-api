import { all } from 'redux-saga/effects'
import contactWatcherSaga from './contactSagas';

export default function* rootSaga() {
	yield all([
	  contactWatcherSaga()
	]);
  }
  